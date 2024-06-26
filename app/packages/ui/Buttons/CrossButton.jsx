import React, { useState, useEffect } from 'react';

import { CrossIcon } from '@/app/packages/ui/Icon';

const CrossButton = ({ onClick }) => {
    return (
        <button
            className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small  rounded-full px-0 !gap-0 transition-transform-colors-opacity motion-reduce:transition-none bg-default/40 text-default-foreground h-7 w-7 min-w-[1.5rem] hover:bg-red-secondary"
            type="button"
            onClick={onClick}
        >
            <CrossIcon />
        </button>
    );
}

export default CrossButton;