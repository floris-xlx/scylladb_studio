import React from 'react';
import Image from 'next/image';

const ImageGrayBgLarge = ({ src, alt, ProductName = "Product name" }) => {
    return (
        <div
            className="relative shadow-black/5 shadow-none rounded-large"
            style={{ maxWidth: 'fit-content' }}
        >
            <Image
                src={src}
                className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large h-full w-full"
                alt={ProductName}
                width={400}
                height={250}
                data-loaded="true"
                objectFit="cover"
            />
        </div>
    )
}

export default ImageGrayBgLarge;