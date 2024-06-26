import React from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { Spinner } from '@nextui-org/react';

const ButtonTransparentHover = ({ label, isLoading, onPress }) => {
    return (
        <button
            onClick={!isLoading ? onPress : null}
            className={`text-secondary p-2 bg-transparent transition flex flex-row gap-x-2 items-center rounded-md select-none ${!isLoading ? 'hover:bg-accent' : ''}`}
            disabled={isLoading}
        >
            {isLoading && <Spinner color="default" className="pr-2" size="sm" />}
            {label}
            <PaperAirplaneIcon className="w-6 h-6 text-accent" />
        </button>
    )
}

export default ButtonTransparentHover;