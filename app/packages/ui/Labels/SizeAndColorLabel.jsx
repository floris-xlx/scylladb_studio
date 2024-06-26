import React from 'react';

const SizeAndColorLabel = ({ size, color }) => {
    return (
        <div className="flex items-center gap-3">
        <p>
            <span className="text-small text-default-500">Color: </span>
            <span className="text-small font-medium capitalize text-default-700">
                {color}
            </span>
        </p>
        <p>
            <span className="text-small text-default-500">Size: </span>
            <span className="text-small font-medium text-default-700">
                {size}
            </span>
        </p>
    </div>
    )
}

export default SizeAndColorLabel;
