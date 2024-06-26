"use client";

import React, { useEffect, useState, Fragment } from "react";
import AutoComplete from "@/app/packages/ui/AutoComplete/PairnameAutoComplete";
import ButtonIconInlineWithText from "@/app/packages/ui/Buttons/ButtonIconInlineWithText";

import LabelIconWithText from "@/app/packages/ui/Labels/LabelIconWithText";


const VerticalNavigation = ({
    children,
    setKeyspace
}) => {
    const [keyspace, setPairname] = useState('');
    const [tables, setTables] = useState([]);

    useEffect(() => {
        const fetchTables = async () => {
            try {
                const response = await fetch('/api/get-tables');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const tablesList = await response.json();
                setTables(tablesList);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchTables();
    }, []);

    return (
        <div className="flex flex-col h-screen bg-primary w-full overflow-x-hidden">
            {/* header component with controls */}
            <div className="border-b border-primary h-[205px] flex flex-col justify-between items-center py-5">

                <div className="w-full px-6 select-none">
                    <AutoComplete
                        setPairname={setPairname}
                        prefix="Keyspace"
                    />
                </div>

                <div className="w-full px-6 select-none flex items-center">
                    < ButtonIconInlineWithText text="Create Table" />
                </div>

                <div className="w-full px-6 select-none">
                    <AutoComplete
                        setPairname={setPairname}
                        prefix="Table"
                    />

                </div>

            </div>

            <div className="flex flex-col items-center gap-y-1 pt-4 mx-auto w-full px-2" >
                {tables.map((table, index) => (
                    <LabelIconWithText key={index} text={table} />
                ))}
            </div>
        </div>
    );
};

export default VerticalNavigation;
