import React, { useState, useEffect } from 'react';

const ProductSizeChip = ({ 
    size,
    setSelectedSize,
    selectedSize
 }) => {
    const highlighterClass = "!outline !outline-offset-1 !outline-brand-primary";


    return (
        <label className="group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2"
        >

            <div
                style={{
                    border: '0px',
                    clip: 'rect(0px, 0px, 0px, 0px)',
                    clipPath: 'inset(50%)',
                    height: '1px',
                    margin: '-1px',
                    overflow: 'hidden',
                    padding: '0px',
                    position: 'absolute',
                    width: '1px',
                    whiteSpace: 'nowrap',
                }}
            >
                <input
                    aria-label={size}
                    tabIndex="-1"
                    type="radio"
                    value={size}
                    name="product-size"
                ></input>
            </div>
            <div
                className={`max-w-fit min-w-min inline-flex items-center justify-between box-border whitespace-nowrap px-2 h-8 rounded-md bg-input-primary relative select-none text-large hover:bg-accent transition ${selectedSize === size ? highlighterClass : ''}`}
                id=":r19:"
                onClick={() => setSelectedSize(size)}
            >
                <span className="flex-1 font-normal px-2 !text-small text-secondary">
                    {size}
                </span>
            </div>
        </label>
    )
}

export default ProductSizeChip;