import React from 'react';
import HexToRgb from '@/app/packages/hooks/formatting/HexToRgb';

const ColorObject = ({
    color,
    selectedColor,
    setSelectedColor,
    setSelectedProductHash,
    productHash
}) => {
    const rgb = HexToRgb(color);
    const isSelected = selectedColor === color;

    const handleClick = () => {
        setSelectedColor(color);
        
        if (productHash !== null) {
            setSelectedProductHash(productHash);
        }
    };

    return (
        <label
            className={`group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2 ${isSelected ? 'ring-brand-primary' : ''}`}
            data-selected="true"
            onClick={handleClick}
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
                    aria-labelledby=":rh:"
                    aria-describedby="react-aria7768599143-:re:"
                    tabIndex="0"
                    type="radio"
                    value={color}
                    checked={isSelected}
                    name="react-aria7768599143-:rg:"
                    readOnly
                ></input>
            </div>

            <span
                className={`select-none  h-12 w-12 rounded-full border border-primary transition-transform group-data-[pressed=true]:scale-90 ring-2 ring-offset-2 ring-offset-content1 bg-[${color}] ${isSelected ? '!outline !outline-brand-primary !outline-offset-2' : ''}`}
                style={{
                    backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
                    '--tw-ring-color': 'transparent',
                }}
            >

            </span>
        </label>
    );
};

const ColorGroup = ({
    LocalColorData,
    selectedColor,
    setSelectedColor,
    setSelectedProductHash
}) => {
    const localColorNameTag = LocalColorData.find(colorData => colorData.shoe_hex_color === selectedColor)?.shoe_color;

    
    return (
        <div className="flex flex-col">
            <div className="flex flex-row gap-x-2">
                {LocalColorData.map((colorData, index) => (
                    <ColorObject
                        key={index}
                        color={colorData.shoe_hex_color}
                        selectedColor={selectedColor}
                        setSelectedColor={setSelectedColor}
                        setSelectedProductHash={setSelectedProductHash}
                        productHash={colorData.shoe_hash}
                    />
                ))}

            </div>
            <div className="flex flex-row items-center">
                <span className="text-secondary font-normal pt-2 select-none">
                    {localColorNameTag}
                </span>
            </div>
        </div>

    );
};

export default ColorGroup;