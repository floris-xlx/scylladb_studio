import React, { useState, useEffect } from 'react';
import LoginButton from '@/app/components/ui/Buttons/LoginButton';

const HeaderLogin = () => {
    return (
        <header className="z-10 absolute h-[70px] w-full">
            <div className="flex flex-row justify-end p-4">
                <LoginButton />
            </div>
        </header>
    )
}

export default HeaderLogin;