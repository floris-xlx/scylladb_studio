import React, { useState, useEffect } from 'react'
import { Spinner } from '@nextui-org/react';


const ButtonPrimary = ({
    value,
    setValue,
    label,
    isLink,
    LinkTo,
    color = "Primary",
    blankPage,
    icon,
    widthFit = false,
    isDataLoading = false
}) => {
    const buttonColorPrimary = "bg-brand-primary hover:bg-brand-secondary transition";
    const buttonColorSecondary = "bg-secondary hover:bg-[var(--button-hover-color)] transition";
    const [parentClass, setParentClass] = useState("");
    const [buttonColor, setButtonColor] = useState(buttonColorPrimary);

    useEffect(() => {
        if (color === "Primary") {
            setButtonColor(buttonColorPrimary);
        } else if (color === "Secondary") {
            setButtonColor(buttonColorSecondary);
        }
        if (widthFit) {
            setParentClass("max-w-fit flex mx-auto mt-[20px]");
        }
    }, [color, widthFit]);


    return (
        <div className={`${parentClass}`}>
            {!isDataLoading ? (

                { isLink } ? (
                    <a
                        href={LinkTo}
                        target={blankPage ? "_blank" : "_self"}
                        type="submit"
                        className={`flex w-full justify-center rounded-md border border-transparent p-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition cursor-pointer select-none ${buttonColor} gap-x-[5px] items-center`}
                        onClick={setValue}
                        value={value}
                    >
                        {icon}
                        {label}
                    </a>
                ) : (
                    <button
                        type="submit"
                        className={`flex w-full justify-center rounded-md border border-transparent p-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition cursor-pointer ${buttonColor} gap-x-[5px] items-center`}
                        onClick={setValue}
                        value={value}
                    >
                        {icon} {label}
                    </button>
                )

            ) : (
                <button
                    type="submit"
                    className={`flex w-full justify-center rounded-md border border-transparent p-2 text-sm font-medium text-white shadow-sm  transition bg-brand-primary gap-x-[5px] items-center  cursor-normal select-none`}
                    disabled
                >
                    <Spinner color="secondary" className="pr-2" size="sm" />
                    {label}
                </button>
            )}
        </div>
    )
}

export default ButtonPrimary