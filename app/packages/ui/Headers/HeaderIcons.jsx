import React, { useState, useEffect } from 'react';
import LoginButton from '@/app/components/ui/Buttons/LoginButton';
import ThemeButton from '@/app/components/ui/Theme/ThemeButton';
import ButtonIcon from '@/app/components/ui/Buttons/ButtonIcon';
import {
    MagnifyingGlassIcon,
    ShoppingCartIcon,
    SunIcon,
    MoonIcon,
} from '@heroicons/react/24/outline';
import { getTheme, setTheme } from "@/app/client/hooks/darkmode/DarkModeCookie.js";
import GoBackButton from '@/app/components/ui/Navigators/GoBackButton';

const HeaderIcons = ({
    isOpen,
    setIsOpen,
    handleOpenModal_shoppingCart,
    showGoBack = false,
    cartItemsCount
}) => {
    const handleOpenPalette = () => {
        setIsOpen((prevState) => !prevState);
    };

    const [darkMode, setDarkMode] = useState(getTheme());
    const [darkModeIcon, setDarkModeIcon] = useState(null);

    const LightModeIcon = "<SunIcon className='w-[32px] h-[32px] text-icon' />";
    const DarkModeIcon = "<MoonIcon className='w-[32px] h-[32px] text-icon' />";


    useEffect(() => {
        const currentTheme = getTheme();
        setDarkMode(currentTheme);
        setDarkModeIcon(currentTheme === "light" ? LightModeIcon : DarkModeIcon);
    }, []);

    function toggleDarkMode() {
        const newTheme = darkMode === "dark" ? "light" : "dark";
        setTheme(newTheme);
        setDarkMode(newTheme);
        setDarkModeIcon(newTheme === "dark" ? DarkModeIcon : LightModeIcon);
    }

    console.log("cartItemsCount", cartItemsCount);

    return (
        <header className="z-10 fixed h-[70px] w-full glassmorphism border-b border-primary">
            <div className="flex flex-row justify-between p-4 items-center -mt-[7px]">

                <div className="flex flex-row items-center gap-x-2">

                    {showGoBack && (
                        <div className="border-r border-primary pr-2 -py-4 mt-[3px]">
                            <GoBackButton />
                        </div>
                    )}

                    <ButtonIcon onPress={toggleDarkMode}>
                        {darkMode === "light" ? (
                            <SunIcon className='w-[32px] h-[32px] text-icon' />
                        ) : (
                            <MoonIcon className='w-[32px] h-[32px] text-icon' />
                        )}
                    </ButtonIcon>

                    <ButtonIcon 
                        onPress={handleOpenModal_shoppingCart}
                        badgeCount={cartItemsCount}    
                    >

                        <ShoppingCartIcon
                            className="w-[32px] h-[32px] stroke-width-2 text-icon"
                        />
                    </ButtonIcon>

                    <ButtonIcon onPress={handleOpenPalette}>
                        <MagnifyingGlassIcon
                            className="w-[32px] h-[32px] text-icon "

                        />
                    </ButtonIcon>

                </div>

                <LoginButton />
            </div>
        </header>
    )
}

export default HeaderIcons;