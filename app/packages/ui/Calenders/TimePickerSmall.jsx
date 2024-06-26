import React, {useState} from "react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";

import { hours, minutes } from "@/app/packages/workerdata/times.js";
import {  SetKeyLocalStorage } from "@/app/packages/caching/LocalStorageRouter";


export default function App() {
    const variants = ["flat"];

    const date = new Date();
    const currentHour = date.getHours();
    const currentMinute = date.getMinutes();

    const [selectedHour, setSelectedHour] = useState(currentHour);
    const [selectedMinute, setSelectedMinute] = useState(currentMinute);
    const [fullTime, setFullTime] = useState(`${selectedHour}:${selectedMinute}`)
    SetKeyLocalStorage('NewTradetime', fullTime)

    const handleHourChange = (hour) => {
        setSelectedHour(hour);
        setFullTime(`${hour}:${selectedMinute}`)
        SetKeyLocalStorage('NewTradetime', fullTime);
    }

    const handleMinuteChange = (minute) => {
        setSelectedMinute(minute);
        setFullTime(`${selectedHour}:${minute}`)
        SetKeyLocalStorage('NewTradetime', fullTime);
    }

    return (
        <>
            <h2 className="inline-block text-sm font-medium text-primary-accent mt-2">Select time</h2>
            <div className="w-full flex flex-row gap-4 mt-[10px] mb-[15px]">

                {variants.map((variant) => (
                    <div key={variant} className="flex flex-row items-center w-full gap-x-4 mx-auto">
                        <Autocomplete
                            aria-label="Select hour"
                            defaultItems={hours}
                            size="sm"
                            defaultSelectedKey={currentHour.toString()}
                            onSelectionChange={handleHourChange}
                            className="w-full background-input-field border border-primary rounded-md "
                        >
                            {(item) => <AutocompleteItem key={item.id}>{item.value}</AutocompleteItem>}
                        </Autocomplete>

                        <p className="text-primary-secondary flex items-center justify-center">:</p>

                        <Autocomplete
                            aria-label="Select minute"
                            size="sm"
                            defaultItems={minutes}
                            defaultSelectedKey={currentMinute.toString()}
                            onSelectionChange={handleMinuteChange}
                            className="w-full background-input-field border border-primary rounded-md"
                        >
                            {(item) => <AutocompleteItem key={item.id}>{item.value}</AutocompleteItem>}
                        </Autocomplete>

                    </div>
                ))}
            </div>
        </>
    );
}
