import React from "react";

import { GetKeyLocalStorage } from "@/app/packages/caching/LocalStorageRouter";
import ProfilePic from "@/app/packages/ui/User/ProfilePic.jsx";

const StrategyNameCard = ({
    strategyName
}) => {

    if (strategyName === null) {
        strategyName = GetKeyLocalStorage('strategyName');
    }

    return (
        <div className="mb-2 border-primary border p-4 bg-secondary rounded-md dashboard-width lg:w-full ">
            <h1 className="text-sm font-medium text-primary">
                {strategyName.length > 50 ? `${strategyName.substring(0, 50)}...` : strategyName}
            </h1>

            <div className="mt-2 flex flex-row">
                <div>
                    < ProfilePic showUsername={true} />
                </div>
            </div>
        </div>
    );
}

export default StrategyNameCard;