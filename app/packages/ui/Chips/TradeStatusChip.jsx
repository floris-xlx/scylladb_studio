import React from 'react';

import CapitalizeFirstLetter from '@/app/packages/hooks/formatting/CapitalizeLetter';

const TradeStatusChip = ({ tradeStatus }) => {
    const StatusColors = {
        pending: "bg-blue-primary text-blue",
        unapproved: "bg-input-primary text-gray-500",
        loss: "bg-red-accent text-red",
        tp1: "bg-green-accent text-green",
        tp2: "bg-green-accent text-green",
        tp3: "bg-green-accent text-green",
        invalid: "bg-red-accent text-red",
    };

    // if the tradeStatus is not int he list make the text ???
    const Text = StatusColors[tradeStatus] ? CapitalizeFirstLetter(tradeStatus) : "???";
    const chipColor = StatusColors[tradeStatus] ? StatusColors[tradeStatus] : "bg-gray-200 text-gray-800";

    return (
        <>
            <div className={`flex gap-4 rounded-md py-[3px] px-[7px] w-fit ${chipColor} `}>
                <div className=" text-[12px] font-normal flex flex-row  gap-1 select-none mx-auto">
                    {Text}
                </div>
            </div>
        </>
    );
};

export default TradeStatusChip;
