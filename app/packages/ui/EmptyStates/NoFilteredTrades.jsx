import React, {useState} from 'react';
import { FaceFrownIcon } from '@heroicons/react/24/outline';
import { RemoveAllCachedKeys } from '@/app/packages/caching/LocalStorageRouter';
import { refreshPage } from '@/app/packages/hooks/refreshPage';
import ButtonPrimary from '@/app/packages/ui/Buttons/ButtonPrimary';

const NoFilteredTrades = () => {
    const [isFilterLoading, setFilterLoading] = useState(false);

    // reset filter by removing all cached keys and refreshing the page
    const resetFilter = () => {
        setFilterLoading(true);
        RemoveAllCachedKeys();
        refreshPage();
    }

    return (
        <div className="text-center w-[350px]">
            <div>
                <div>
                    < FaceFrownIcon className="h-12 w-12 text-brand-primary mx-auto" aria-hidden="true" />
                </div>

                <div>
                    <h3 className="mt-2 text-xl font-medium text-primary select-none">
                        No trades found matching your filter
                    </h3>
                    <p className="mt-1 text-sm text-secondary font-normal select-none">
                        Remove or adjust your filter to see more trades
                    </p>
                    <ButtonPrimary 
                        label={"Clear filter"}
                        widthFit={true}
                        isDataLoading={isFilterLoading}
                        setValue={resetFilter}
                    />
                </div>
            </div>
        </div>
    );
};

export default NoFilteredTrades;