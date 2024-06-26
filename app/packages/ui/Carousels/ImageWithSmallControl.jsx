import React, { useState } from 'react';
import Image from 'next/image';

const ImageWithSmallControl = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleImageClick = (index) => setCurrentImageIndex(index);

    return (
        <div className="w-full flex mx-auto flex-col">
            <div className="flex mb-2.5 gap-x-2">
                {images.map((img, index) => (
                    <button 
                        key={index} 
                        onClick={() => handleImageClick(index)} 
                        className={`border ${currentImageIndex === index ? 'border-brand-primary border-[3px]' : 'border-primary border-[3px]'} mx-1.25 p-0.5 rounded-lg items-center `}
                    >
                        <Image src={img} alt={`Thumbnail ${index}`} width={50} height={50} />
                    </button>
                ))}
            </div>
            <div className="flex justify-center">
                <Image src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} width={500} height={500} />
            </div>
        </div>
    );
};

export default ImageWithSmallControl;
