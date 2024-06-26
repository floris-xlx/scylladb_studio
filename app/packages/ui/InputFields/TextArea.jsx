import React, {useEffect} from 'react';
import { SetKeyLocalStorage } from '../../caching/LocalStorageRouter';

const TextArea = ({
    label,
    value = "",
    setValue,
    placeholder,
    width
}) => {
    // when this is focused, set the key in local storage BLOCKED_FROM_PALETTE_EVENT to true to prevent the palette from opening and then set it back to false when it is blurred




    return (
        <div>
            <label
                className="block text-sm font-medium text-accent"
            >
                {label}
            </label>

            <textarea
                className="bg-input-primary rounded-md mt-2 resize-none focus:outline-none focus:ring-2 active:ring-purple-600 focus:ring-purple-600 0 w-[365px] text-sm font-normal h-[80px] border border-primary text-accent p-2"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                spellCheck="false"
            >

            </textarea>
        </div>
    );
}

export default TextArea;