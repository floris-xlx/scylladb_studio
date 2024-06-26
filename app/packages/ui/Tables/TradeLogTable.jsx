import React, { useEffect, useState } from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Input,
    Button,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Chip,
    User,
    Pagination,
} from "@nextui-org/react";
import { VerticalDotsIcon } from "./VerticalDotsIcon";
import { SearchIcon } from "./SearchIcon";
import { ChevronDownIcon } from "./ChevronDownIcon";
import { columns, statusOptions } from "./data";
import { capitalize } from "./utils";
import TradeDeletionConfirmation from "@/app/packages/ui/Modals/TradeDeletionConfirmation.jsx";
import TradeEdit from "@/app/packages/ui/Modals/TradeEdit.jsx";
import { getRelativeTime } from "@/app/packages/hooks/datetime/RelativeDate.js";
import { GetAllTradesByStrategyHash } from "@/app/packages/supabase/SupabaseUserData.js";
import {
    SetKeyLocalStorage, RemoveKeyLocalStorage, GetKeyLocalStorage
} from "@/app/packages/caching/LocalStorageRouter";


const statusColorMap = {
    Win: "success",
    Loss: "danger",
    Running: "warning",
};

const INITIAL_VISIBLE_COLUMNS = ["pairname", "date", "outcome", "actions"];

export default function App({ userId, refreshTradeLog, callRefreshTradeLog }) {

    const [tradeObjects, setTradeObjects] = useState([]);
    const [isLoading, setIsDataLoading] = useState(true);

    // set tradeObjects.length to 0 if it is loading
    // if refreshTradeLog is true, then we need to refresh the trade log component and then set it to false

    useEffect(() => {
        if (refreshTradeLog) {
            async function fetchData() {
                try {
                    const tradeObjects = await GetAllTradesByStrategyHash(GetKeyLocalStorage('strategyHash'), userId);
                    setTradeObjects(tradeObjects);
                    setIsDataLoading(false);
                } catch (error) {
                    console.log("error", error);
                }
            }
            fetchData();
        }
    }, [refreshTradeLog, userId]);


    useEffect(() => {
        const strategyHash = GetKeyLocalStorage('strategyHash');
        async function fetchData() {
            try {
                const tradeObjects = await GetAllTradesByStrategyHash(strategyHash, userId);
                setTradeObjects(tradeObjects);
                setIsDataLoading(false);

            } catch (error) {
                console.log("error", error);
            }
        }
        fetchData();
    }, [userId]);


    const [showTradeDeletionModal, setShowTradeDeletionModal] = useState(false);
    const [showTradeEditModal, setShowTradeEditModal] = useState(false);

    const handleTradeDeletion = (setSelectedTradeHash) => {
        RemoveKeyLocalStorage("tradeHash");
        SetKeyLocalStorage("tradeHash", setSelectedTradeHash);
        setShowTradeDeletionModal(true);
    };

    const handleTradeEdit = (setSelectedTradeHash) => {
        RemoveKeyLocalStorage("tradeHash");
        SetKeyLocalStorage("tradeHash", setSelectedTradeHash);
        setShowTradeEditModal(true);
    };

    const [filterValue, setFilterValue] = useState("");
    const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
    const [visibleColumns, setVisibleColumns] = React.useState(new Set(INITIAL_VISIBLE_COLUMNS));
    const [statusFilter, setStatusFilter] = React.useState("all");
    const [rowsPerPage, setRowsPerPage] = React.useState(15);
    const [sortDescriptor, setSortDescriptor] = React.useState({
        column: "position_size",
        direction: "ascending",
    });

    const [page, setPage] = React.useState(1);
    const pages = Math.ceil(tradeObjects.length / rowsPerPage);
    const hasSearchFilter = Boolean(filterValue);

    const headerColumns = React.useMemo(() => {
        const filteredColumns = columns.filter(column => column.uid !== "unix_time");
        if (visibleColumns === "all") return filteredColumns;

        return filteredColumns.filter((column) => Array.from(visibleColumns).includes(column.uid));
    }, [visibleColumns]);

    const filteredItems = React.useMemo(() => {
        let filteredTrades = [...tradeObjects];

        if (hasSearchFilter) {
            filteredTrades = filteredTrades.filter((trade) =>
                trade.pairname.toLowerCase().includes(filterValue.toLowerCase()),
            );
        }
        if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
            filteredTrades = filteredTrades.filter((trade) =>
                Array.from(statusFilter).includes(trade.outcome),
            );
        }

        return filteredTrades;
    }, [tradeObjects, filterValue, statusFilter]);

    const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return filteredItems.slice(start, end);
    }, [page, filteredItems, rowsPerPage]);

    const sortedItems = React.useMemo(() => {
        return [...items].sort((a, b) => {
            const first = a[sortDescriptor.column];
            const second = b[sortDescriptor.column];
            const cmp = first < second ? -1 : first > second ? 1 : 0;

            return sortDescriptor.direction === "descending" ? -cmp : cmp;
        });
    }, [sortDescriptor, items]);

    const renderCell = React.useCallback((user, columnKey) => {
        const cellValue = user[columnKey];

        switch (columnKey) {
            case "name":
                return (
                    <User
                        avatarProps={{ radius: "full", size: "sm", src: user.avatar }}
                        classNames={{
                            description: "text-default-500",
                        }}
                        description={user.entry}
                        name={cellValue}
                    >
                        {user.entry}
                    </User>
                );

            case "date":
                return (
                    <div className="flex flex-col">
                         <p className="text-bold text-small">{getRelativeTime(user.unix_time)}</p> {/* this is where we display the relative time */}
                        <p className="text-bold text-xs capitalize text-default-500">
                            {
                                new Date(user.unix_time * 1000).toLocaleString(
                                    [],
                                    {
                                        year: 'numeric',
                                        month: 'numeric',
                                        day: 'numeric',
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    }
                                )
                        }</p>
                        {/* this is where we display the date in a human readable format 21-03-2024 12:23 */}
                    </div>
                ); // sessions should go here FIXME {user.pnl}

            case "outcome":
                return (
                    <Chip
                        className="capitalize border-none gap-1 text-default-600"
                        color={statusColorMap[user.outcome]}
                        size="sm"
                        variant="dot"
                    >
                        {cellValue || "Unknown"}
                    </Chip>
                );

            case "actions":
                return (
                    <div className="relative flex justify-end items-center gap-2">
                        <Dropdown className="brand-purple-background border-1 border-default-200 rounded-md" aria-label="Actions Menu">
                            <DropdownTrigger>
                                <Button isIconOnly radius="full" size="sm" variant="light" aria-labelledby="actionsMenuButton">
                                    <VerticalDotsIcon className="text-default-400" />
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu className="rounded-md" aria-labelledby="actionsMenu">
                                <DropdownItem id="viewAction">View</DropdownItem>
                                <DropdownItem id="editAction"onClick={() => handleTradeEdit(user.trade_hash)}>Edit</DropdownItem>
                                <DropdownItem id="deleteAction" onClick={() => handleTradeDeletion(user.trade_hash)}>Delete</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                );

            default:
                return cellValue;
        }
    }, []);

    const onRowsPerPageChange = React.useCallback((e) => {
        setRowsPerPage(Number(e.target.value));
        setPage(1);
    }, []);


    const onSearchChange = React.useCallback((value) => {
        if (value) {
            setFilterValue(value);
            setPage(1);
        } else {
            setFilterValue("");
        }
    }, []);

    const topContent = React.useMemo(() => {
        return (
            <div className="flex flex-col gap-4">
                <div className="flex justify-between gap-3 items-end">

                        <Input
                            isClearable
                            classNames={{
                                base: "w-full sm:max-w-[44%] h-unit-10 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition hover:border-[var(--brand-purple)] button-color-background rounded-md ",

                            }}
                            size="xs"
                            radius="md"
                            startContent={<SearchIcon className="text-default-300" />}
                            value={filterValue}
                            variant="bordered"
                            onClear={() => setFilterValue("")}
                            onValueChange={onSearchChange}
                        />

                    <div className="flex gap-3">
                        <Dropdown>
                            <DropdownTrigger className="hidden sm:flex">
                                <Button
                                    endContent={<ChevronDownIcon className="text-small" />}
                                    size="sm"
                                    variant="flat"
                                >
                                    Outcome
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu
                                disallowEmptySelection
                                aria-label="Table Columns"
                                closeOnSelect={false}
                                selectedKeys={statusFilter}
                                selectionMode="multiple"
                                onSelectionChange={setStatusFilter}
                            >
                                {statusOptions.map((outcome) => (
                                    <DropdownItem key={outcome.uid} className="capitalize">
                                        {capitalize(outcome.name)}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown>
                            <DropdownTrigger className="hidden sm:flex">
                                <Button
                                    endContent={<ChevronDownIcon className="text-small" />}
                                    size="sm"
                                    variant="flat"
                                >
                                    Columns
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu
                                disallowEmptySelection
                                aria-label="Table Columns"
                                closeOnSelect={false}
                                selectedKeys={visibleColumns}
                                selectionMode="multiple"
                                onSelectionChange={setVisibleColumns}
                                classNames={{
                                    base: "button-color-background p-0 rounded-md border-0"
                                }}
                                className="p-0 border-transparent"
                            >
                                {columns.filter(column => column.uid !== "unix_time").map((column) => (
                                    <DropdownItem key={column.uid} className="capitalize">
                                        {capitalize(column.name)}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
            </div>
        );
    }, [
        filterValue,
        statusFilter,
        visibleColumns,
        onSearchChange,
        onRowsPerPageChange,
        tradeObjects.length,
        hasSearchFilter,
    ]);

    const bottomContent = React.useMemo(() => {
        return (
            <div className="py-2 px-2 flex justify-between items-center">
                <Pagination
                    showControls
                    classNames={{
                        cursor: "brand-purple-background text-white group-focus:false border-none",
                    }}
                    color="default"
                    isDisabled={hasSearchFilter}
                    page={page}
                    total={pages}
                    variant="light"
                    onChange={setPage}
                />

            </div>
        );
    }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

    const classNames = React.useMemo(
        () => ({
            wrapper: ["max-h-[382px]", "max-w-3xl"],
            th: ["bg-transparent", "text-default-500", "border-b", "border-divider"],
            td: [
                // changing the rows border radius
                // first
                "group-data-[first=true]:first:before:rounded-none",
                "group-data-[first=true]:last:before:rounded-none",
                // middle
                "group-data-[middle=true]:before:rounded-none",
                // last
                "group-data-[last=true]:first:before:rounded-none",
                "group-data-[last=true]:last:before:rounded-none",
            ],
        }),
        [],
    );

    return (
        <>
            < TradeDeletionConfirmation
                showTradeDeletionModal={showTradeDeletionModal}
                setShowTradeDeletionModal={setShowTradeDeletionModal}
                userId={userId}
                callRefreshTradeLog={callRefreshTradeLog}
            />
            < TradeEdit
                showTradeEditModal={showTradeEditModal}
                setShowTradeEditModal={setShowTradeEditModal}
                userId={userId}
                callRefreshTradeLog={callRefreshTradeLog}
            />

        <Table
            isCompact
            removeWrapper
            aria-label="Example table with custom cells, pagination and sorting"
            bottomContent={bottomContent}
            bottomContentPlacement="outside"
            checkboxesProps={{
                classNames: {
                    wrapper: "after:bg-[var(--brand-purple)] after:text-background text-background",
                },
            }}
            classNames={classNames}
            selectedKeys={selectedKeys}
            selectionMode="multiple"
            sortDescriptor={sortDescriptor}
            topContent={topContent}
            topContentPlacement="outside"
            onSelectionChange={setSelectedKeys}
            onSortChange={setSortDescriptor}
        >

            <TableHeader columns={headerColumns}>
                {(column) => (
                    <TableColumn
                        key={column.uid}
                        align={column.uid === "actions" ? "center" : "start"}
                        allowsSorting={column.sortable}
                    >
                        {column.name}
                    </TableColumn>
                )}
            </TableHeader>
            <TableBody emptyContent={"No trades found"} items={sortedItems}>
                {(item) => (
                    <TableRow key={item.trade_hash}>
                        {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
        </>
    );
}