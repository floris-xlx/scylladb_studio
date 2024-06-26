import React, { useState } from 'react';
import { Spinner } from "@nextui-org/react";


const LoginButton = ({
    SignInText = "Sign in"
}) => {


    return (
        <div>
            <a
                href="/login"
                className="flex w-full justify-center rounded-md border border-transparent bg-brand-primary py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-brand-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition select-none"
            >
                {SignInText}
            </a>
        </div>
    );
}

export default LoginButton;