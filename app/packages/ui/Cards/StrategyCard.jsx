import React from "react";

import StrategyCardAreaChart from "@/app/packages/ui/Charts/StrategyCardAreaChart.jsx";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { SetKeyLocalStorage } from "@/app/packages/caching/LocalStorageRouter";

const StrategyCard = ({
    strategyName,
    setCurrentStrategy,
    strategyHash
}) => {

    function handleStrategyCardClick(strategyName) {
        setCurrentStrategy(strategyName);
        SetKeyLocalStorage('strategyName', strategyName);
        SetKeyLocalStorage('strategyHash', strategyHash);
    }

    return (
        <div>
            <div className="flex flex-col  w-full h-full bg-secondary rounded-md sm:h-[350px] border-primary border">
                <div className="flex flex-col h-[350px] ">
                    <div className="flex flex-row justify-between items-center pt-4 pl-6 pr-6 pb-3 whitespace-nowrap overflow-hidden text-lg sm:text-sm md:text-lg lg:text-lg text-primary font-semibold">
                        {strategyName.length > 30 ? `${strategyName.substring(0, 30)}...` : strategyName}
                    </div>

                    <div className="flex flex-row justify-between items-center pl-6 pr-6 ">
                        <div className="rounded-md border-primary h-[150px] w-full bg-secondary border">
                            <StrategyCardAreaChart />
                        </div>
                    </div>

                    <div className="flex flex-row justify-between px-6 py-4">
                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-col justify-between items-center ">
                                <h1 className="text-primary text-sm">Winning rate</h1>
                                <h1 className="text-secondary text-sm">89%</h1>
                            </div>
                        </div>

                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-col justify-between items-center ">
                                <h1 className="text-primary text-sm">Total profit</h1>
                                <h1 className="text-secondary text-sm">34.8k</h1>
                            </div>
                        </div>

                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-col justify-between items-center ">
                                <h1 className="text-primary text-sm">Amount trades</h1>
                                <h1 className="text-secondary text-sm">321</h1>
                            </div>
                        </div>

                    </div>
                    {/*
                    for doing da journaling */}
                    <div className="flex w-full px-6 flex-row">
                        <button
                            type="button"
                            className="inline-flex items-center rounded-md bg-secondary px-4 h-[43px] text-sm font-medium text-primary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition w-full"
                            onClick={() => handleStrategyCardClick(strategyName)}
                        >
                            <ArrowRightIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                            View strategy
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StrategyCard;