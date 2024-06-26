import React, { useState, useEffect } from 'react';

const FooterWithStatus = () => {
    const Name = "Froste Kicks";
    return (
        <footer className="flex w-full flex-col pt-[100px] select-none">
            <div className="mx-auto w-full max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-6">
                <div className="flex flex-col items-center justify-center gap-2 md:order-2 md:items-end">
                    <div
                        className="relative flex flex-col gap-2"
                        aria-label="Select a theme"
                        role="radiogroup"
                        aria-orientation="horizontal"
                        id="react-aria9846245699-:r0:"
                    >
                        <div
                            className="flex flex-col flex-wrap data-[orientation=horizontal]:flex-row gap-0 items-center"
                            role="presentation"
                            data-orientation="horizontal"
                        >



                        </div>
                    </div>
                </div>
                <div className="mt-4 md:order-1 md:mt-0">
                    <div className="flex items-center justify-center gap-3 md:justify-start">
                        <div className="flex items-center">

                            <span className="text-small font-medium text-primary">{Name}</span>
                        </div>
                        <div
                            className="shrink-0 bg-divider border-none w-divider h-4"
                            role="separator"
                            data-orientation="vertical"
                            aria-orientation="vertical"
                        ></div>
                        <div className="relative max-w-fit min-w-min inline-flex items-center justify-between box-border whitespace-nowrap border-medium border-default bg-transparent h-7 text-small rounded-full border-none px-0 text-default-500">
                            <span className="w-2 h-2 ml-1 rounded-full bg-success"></span>
                            <a
                                href="https://status.xylex.ai"
                                target="_blank"
                                rel="noreferrer"

                                className="flex-1 text-inherit font-normal px-2 hover:text-brand-primary transition">
                                All systems operational
                            </a>
                        </div>
                    </div>
                    <p className="text-center text-tiny text-default-400 md:text-start">
                        © {new Date().getFullYear()} {Name}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default FooterWithStatus;
