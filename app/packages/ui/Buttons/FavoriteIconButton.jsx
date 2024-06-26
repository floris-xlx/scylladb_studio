import React, { useState } from 'react';

import { HeartIcon } from '@/app/packages/ui/Icon';

const FavoriteIconButton = ({ isFavorite, setIsFavorite }) => {

    return (

        <button
            onClick={() => setIsFavorite((prevState) => !prevState)}
            className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none font-normal overflow-hidden outline-none text-medium rounded-md px-0 !gap-0 w-11 h-11 text-icon transition hover:bg-accent"
            type="button"
        >
            < HeartIcon className="w-6 h-6 text-" />
        </button>
    );
}

export default FavoriteIconButton;