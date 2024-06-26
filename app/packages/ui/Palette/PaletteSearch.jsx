"use client";

import "react-cmdk/dist/cmdk.css";
import CommandPalette, { filterItems, getItemIndex } from "react-cmdk";
import React, { useEffect, useState } from "react";

import { GetKeyLocalStorage, SetKeyLocalStorage } from "@/app/packages/caching/LocalStorageRouter";

import shoes from "./shoes";

const PaletteSearch = ({isOpen, setIsOpen}) => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleKeyPress = (e) => {
                const isBlocked = GetKeyLocalStorage("BLOCKED_FROM_PALETTE_EVENT") === "true";
                if (isBlocked) return;

                // prevent left tab key
                if (e.key === 'Tab' && !e.shiftKey) {
                    return;
                }

                // prevent left control key if theres no f within 200ms
                if (e.key === 'Control' && !e.repeat) {
                    setTimeout(() => {
                        if (GetKeyLocalStorage("BLOCKED_FROM_PALETTE_EVENT") === "true") {
                            SetKeyLocalStorage("BLOCKED_FROM_PALETTE_EVENT", "false");
                        }
                    }, 200);

                    SetKeyLocalStorage("BLOCKED_FROM_PALETTE_EVENT", "true");
                    return;
                }

                if (e.target.tagName.toLowerCase() !== 'input' && e.target.tagName.toLowerCase() !== 'textarea' && (e.key.match(/^[a-z]+$/i) || (e.key === 'f' && e.ctrlKey))) {
                    handleOpenPalette();
                }
            };

            window.addEventListener("keydown", handleKeyPress);

            return () => {
                window.removeEventListener("keydown", handleKeyPress);
            };
        }
    }, []);


    const [page, setPage] = useState("root");
    const [search, setSearch] = useState("");

    // search  pallette
    
    // button handler
    const handleOpenPalette = () => {
        setIsOpen((prevState) => !prevState);
    };

    useEffect(() => {
        // set the search query to cachedPaletteSearchQuery
        if (search) {
            SetKeyLocalStorage("cachedPaletteSearchQuery", search);
        }
    }, [search]);




    const groupedShoes = shoes.reduce((acc, shoe) => {
        const existingGroup = acc.find(group => group.heading === shoe.shoe_name);
        
        if (existingGroup) {
            existingGroup.items.push({
                id: shoe.id,
                children: shoe.shoe_color,
                // icon: "HomeIcon",
                href: "/" + shoe.shoe_name.toLowerCase().replace(/ /g, "_") + "/" + shoe.shoe_color.toLowerCase().replace(/ /g, "_") + "/",
            });
        } else {
            acc.push({
                heading: shoe.shoe_name,
                id: shoe.id,
                items: [
                    {
                        id: shoe.id,
                        children: shoe.shoe_color,
                        // icon: "HomeIcon",
                        href: "/" + shoe.shoe_name.toLowerCase().replace(/ /g, "_") + "/" + shoe.shoe_color.toLowerCase().replace(/ /g, "_") + "/",

                    },
                ],
            });
        }
        return acc;
    }, []);

    const filteredItems = filterItems(groupedShoes, search);
    return (



        <CommandPalette
            onChangeSearch={setSearch}
            onChangeOpen={setIsOpen}
            search={search}
            isOpen={isOpen}
            page={page}

        >
            <CommandPalette.Page id="root" className="!text-primary">
                {filteredItems.length ? (
                    filteredItems.map((list) => (
                        <CommandPalette.List key={list.id} heading={list.heading} className="text-primary">
                            {list.items.map(({ id, ...rest }) => (
                                <CommandPalette.ListItem
                                    key={id}
                                    index={getItemIndex(filteredItems, id)}
                                    {...rest}
                                />
                            ))}
                        </CommandPalette.List>
                    ))
                ) : (
                    <CommandPalette.FreeSearchAction />
                )}
            </CommandPalette.Page>

            <CommandPalette.Page id="projects">
                {/* Projects page */}
            </CommandPalette.Page>
        </CommandPalette>

    );
};

export default PaletteSearch;