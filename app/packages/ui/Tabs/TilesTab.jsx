import React, { useState } from 'react';

const TilesTab = ({ label, options, tilesMaxColumns = 3 }) => {
    const [selectedSize, setSelectedSize] = useState(null);

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    return (
        <div>
            <div className="mb-1 text-[18px] font-semibold text-secondary">
                {label}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${tilesMaxColumns}, 1fr)`, gap: '8px' }}>
                {options.map((option, index) => (
                    <div
                        key={index}
                        onClick={() => handleSizeClick(option)}
                        className={`tile ${selectedSize === option ? ' transition bg-brand-primary text-white border-transparent' : 'border-primary hover:bg-accent text-primary '} border   `}
                        style={{
                            padding: '10px',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            textAlign: 'center'
                        }}
                    >
                        {option}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TilesTab;
