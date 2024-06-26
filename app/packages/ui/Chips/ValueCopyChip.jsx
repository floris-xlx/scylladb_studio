import React from 'react';
import { copyToClipboard } from '@/app/packages/hooks/copytoClipboard';
import { roundToTwoDigits, roundToFourDigits } from '@/app/packages/hooks/formatting/RoundDigits';

const ValueCopyChip = ({
    value,
    copy = true,
    notificationType,
    triggerNotification
}) => {
    if (value === null || isNaN(value) || value === undefined) {
        console.error('Value is not a number');
        return null;
    }
    
    const roundedValue = value < 10 ? roundToFourDigits(value) : roundToTwoDigits(value);
    const displayedValue = roundedValue.toFixed(4);

    if (displayedValue === 'NaN') {
        console.error('Value is not a number');
        return null;
    }

    // this padding is added as a hotfix because the smaller text makes the chips less tall and the card will look weird as result p-[0.285rem]
    // h-[27px] was added as a predaccessor to this as it's a better solution
    // fixes #xlx-1716 by floris
    const fontSize = displayedValue > 1000 ? 'text-[12px]  ' : 'text-[14px]';

    return (
        <span
            className={`rounded-md bg-input-primary p-[3px] text-accent text-center ${fontSize} cursor-pointer hover:bg-accent mt-2 select-none transition ml-[22px] px-2 w-[60px] h-[27px] flex items-center`}
            onClick={() => {
                if (copy) {
                    copyToClipboard(
                        value,
                        triggerNotification,
                        notificationType
                    );
                }
            }}
        >
            {value}
        </span>
    )
};

const ValueCopyChipInlineLabel = ({
    value,
    copy = true,
    notificationType,
    triggerNotification,
    label,
    Rr = 0,
    showRr = false
}) => {
    const roundedValue = (typeof value === 'number' && !isNaN(value)) ? (value < 10 ? roundToFourDigits(value) : roundToTwoDigits(value)) : (value === null ? 0 : value);
    const rrValue = (Rr === null || isNaN(Rr)) ? 0 : Rr;

    return (
        <div className='flex flex-row justify-between items-center'>
            <p className='select-none w-[110px]'>{label}</p>
            <ValueCopyChip
                value={roundedValue}
                copy={copy}
                notificationType={notificationType}
                triggerNotification={triggerNotification}
            />
            {showRr && (
                <p className="flex w-fit items-center rounded-md bg-input-primary p-[4px] py-[5px] ml-[3px] text-accent text-center text-[12px] mt-[8px]">
                    {rrValue}rr
                </p>
            )}
        </div>
    )
}

export { ValueCopyChip, ValueCopyChipInlineLabel };
