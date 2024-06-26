import React, { useState } from 'react';

import { ViewColumnsIcon } from '@heroicons/react/24/outline';

const ButtonIconInlineWithText = ({ text, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="flex flex-row gap-x-2 px-4 items-center justify-start bg-transparent hover:transition-all hover:bg-accent w-full rounded-md p-1 mx-auto"
        >
            <div>
                < ViewColumnsIcon className="h-6 w-6 text-icon" />
            </div>
            <span 
                className="text-accent font-normal text-2xl sm:text-xl "
            >
                {text}
            </span>

        </button>
    )
}

export default ButtonIconInlineWithText;