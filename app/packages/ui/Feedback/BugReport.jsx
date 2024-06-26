'use client';

import React, { useState, useEffect } from 'react';
import { Popover, PopoverTrigger, PopoverContent, Button } from "@nextui-org/react";
import { BugAntIcon } from "@heroicons/react/24/outline";

import ButtonTransparentHover from '@/app/components/ui/Buttons/ButtonTransparentHover';


// import the reporting function
import sendBugReport from '@/app/client/hooks/BugReport';

const BugReport = ({

}) => {
    const [isBugLoading, setBugLoading] = useState(false);
    const [bugReport, setBugReport] = useState('');

    const successMessage = "Thank you for helping us improve our platform. We will look into the issue you reported and get back to you as soon as possible."
    const errorMessage = "We encountered an error while submitting your bug report. Please try again later or contact support for assistance."

    const [localNotification, setLocalNotification] = useState(null);


    const handleBugReport = async () => {
        if (!bugReport) return;

        setBugLoading(true);
        const status = await sendBugReport(bugReport);

        if (status === 200) {
            setLocalNotification(200);
        } else {
            setLocalNotification(500);
        }


        setBugLoading(false);
    }

    const content = (
        <PopoverContent className="w-[240px]">
            <form className="flex w-full max-w-sm flex-col gap-2 rounded-md  p-3">
                <div
                    className="group flex flex-col data-[hidden=true]:hidden w-full"
                    data-slot="base"
                    data-filled="true"
                    data-filled-within="true"
                >
                    <div
                        data-slot="input-wrapper"
                        className="relative w-full inline-flex tap-highlight-transparent flex-row items-center gap-3 bg-default-100 min-h-10 rounded-medium !h-auto !duration-150 transition-colors motion-reduce:transition-none outline-none group-data-[focus-visible=true]:z-10 mt-[5px]"
                        data-has-multiple-rows="true"
                        style={{ cursor: 'text' }}
                    >
                        <div
                            data-slot="inner-wrapper"
                            className="inline-flex w-full h-full items-start "
                        >
                            <textarea
                                data-slot="input"
                                className="w-full font-normal text-small  h-full transition-height !duration-100 rounded-md text-primary p-2"
                                aria-label="Feedback"
                                name="feedback"
                                placeholder="Accurately describe the issue you're facing..."
                                id="react-aria5291302263-:r0:"
                                data-hide-scroll="true"
                                onChange={(e) => setBugReport(e.target.value)}
                                value={bugReport}
                                style={{ height: '120px', width: '250px', important: true, outline: 'none', backgroundColor: 'transparent', resize: 'none' }}
                                disabled={localNotification !== null}
                            ></textarea>
                        </div>
                    </div>
                </div>

                {localNotification !== null && (
                    <div className={`p-3 select-none flex w-full rounded-md items-center mx-auto text-white ${localNotification === 200 ? 'border-green-600 bg-green-400' : 'border-red-600 bg-red-400'}`}>
                        {localNotification === 200 ? successMessage : errorMessage}
                    </div>
                )}

                <div className="flex w-full items-center justify-end pt-2">

                    {localNotification === null && (
                        <ButtonTransparentHover
                            label="Submit"
                            isLoading={isBugLoading}
                            onPress={handleBugReport}
                        />
                    )}
                </div>
            </form>
        </PopoverContent>
    )

    return (


        <div className="flex flex-wrap">


            <Popover
                key={'blur'}
                showArrow
                offset={10}
                placement="bottom"
                backdrop={'blur'}
            >
                <PopoverTrigger>
                    <Button
                        type="button"
                        isIconOnly={true}
                        id="report-bug"
                        className={`items-center justify-center text-sm font-semibold text-primary border-primary bg-transparent hover:bg-accent transition focus:outline-none focus:ring-2 focus:ring-primary rounded-md  w-[40px]`}
                        variant="flat"
                        color="warning"
                    >
                        <div>
                            <BugAntIcon className="w-6 h-6 text-accent" />
                        </div>
                    </Button>
                </PopoverTrigger>
                {content}
            </Popover>

        </div>



    );
};

export default BugReport;
