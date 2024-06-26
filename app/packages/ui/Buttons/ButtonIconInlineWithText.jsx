import React, { useState, useEffect, Fragment } from 'react';
import { PlusIcon } from '@heroicons/react/20/solid';

const ButtonIconInlineWithText = ({ text, onClick }) => {
    return (
        <div className="relative block w-full appearance-none rounded-md   shadow-sm focus:outline-none focus:ring-2   focus:ring-purple-600 sm:text-sm font-medium border-1 border-primary">
            <button
                onClick={onClick}
                className="appearance-none rounded-md bg-input-primary shadow-sm focus:outline-none focus:ring-2   focus:ring-indigo-500 sm:text-sm font-medium w-full h-[40px] text-accent flex items-center justify-start pl-2 gap-x-1 hover:bg-accent hover:transition-all">

                <PlusIcon className="h-6 w-6 text-icon-primary " />

                {text}
            </button>
        </div>
    );
}

export default ButtonIconInlineWithText;