import React from 'react';

const BreadCrumbs = ({homeText, productBrand, productName }) => {
    return (
        <div>
            <nav data-slot="base" aria-label="Breadcrumbs">
                <ol
                    data-slot="list"
                    className="flex flex-wrap list-none rounded-small"
                >
                    <li data-slot="base" className="flex items-center">
                        <a
                            data-slot="item"
                            href="/"

                          
                            className="flex gap-1 items-center  whitespace-nowrap line-clamp-1 tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-foreground/50 text-small hover:text-accent active:opacity-disabled transition-opacity no-underline cursor-pointer"
                            tabIndex="0"
                            role="link"
                        >
                            {homeText}
                        </a>
                        
                        <span
                            data-slot="separator"
                            aria-hidden="true"
                            className="px-1 text-foreground/50"
                        >
                            <svg
                                aria-hidden="true"
                                fill="none"
                                focusable="false"
                                height="1em"
                                role="presentation"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                viewBox="0 0 24 24"
                                width="1em"
                            >
                                <path d="m9 18 6-6-6-6"></path>
                            </svg>
                        </span>
                    </li>
                    <li data-slot="base" className="flex items-center">
                        <span
                        // cursor default added for now due to no href slug working yet
                        // FIXME also changed to span
                            data-slot="item"
                            className="flex gap-1 items-center cursor-default whitespace-nowrap line-clamp-1 tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-foreground/50 text-small hover:opacity-80 active:opacity-disabled transition-opacity no-underline"
                            tabIndex="0"
                            role="link"
                            // href={`/brand/${productBrand}`}
                        >
                            {productBrand}
                        </span>
                        <span
                            data-slot="separator"
                            aria-hidden="true"
                            className="px-1 text-foreground/50"
                        >
                            <svg
                                aria-hidden="true"
                                fill="none"
                                focusable="false"
                                height="1em"
                                role="presentation"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                viewBox="0 0 24 24"
                                width="1em"
                            >
                                <path d="m9 18 6-6-6-6"></path>
                            </svg>
                        </span>
                    </li>
                    <li data-slot="base" className="flex items-center">
                        <a
                            data-slot="item"
                            data-current="true"
                            className="flex gap-1 items-center whitespace-nowrap line-clamp-1  outline-none  text-small no-underline text-brand-primary select-none"
                            aria-disabled="true"
                            role="link"
                            aria-current="page"
                        >
                            {productName}
                        </a>
                    </li>
                </ol>
            </nav>
        </div>
    )
}

export default BreadCrumbs;