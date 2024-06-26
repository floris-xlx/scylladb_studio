import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

const ImageGrayBg = ({
    src, 
    alt, 
    ProductName = "Product name",
    spotlightImage,
    setSpotlightImage
}) => {
    const [imageSrc, setImageSrc] = useState(src);
    const [imageAlt, setImageAlt] = useState(alt);

    useEffect(() => {
        setImageSrc(src);
        setImageAlt(alt);
    }, [src, alt]);

    const isDesktop = useMediaQuery({ minWidth: 1024 });
    const imageSize = isDesktop ? 90 : 60;

    const spotlightImageStyling = "!outline !outline-offset-2 !outline-brand-primary";
    const baseButtonClasses = "relative h-12 w-12 sm:h-24 sm:w-24 flex-none cursor-pointer items-center justify-center rounded-medium ring-offset-background ";

    const selectedButtonClasses = "data-[selected=true]:outline-none data-[selected=true]:ring-2 data-[selected=true]:ring-focus data-[selected=true]:ring-offset-2";
    const imageClasses = "relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none  !duration-300 rounded-large";

    return (
        <button
            className={`bg-transparent hover:bg-accent !transition ${baseButtonClasses} ${selectedButtonClasses} ${imageSrc === spotlightImage ? spotlightImageStyling : ''}`}
            data-selected="false"
            onClick={() => {
                setSpotlightImage(imageSrc);
            }}
        >
            <Image
                src={imageSrc}
                className={imageClasses}
                alt={ProductName}
                data-loaded="true"
                width={imageSize}
                height={imageSize}
            
            />
        </button>
    )
}

export default ImageGrayBg;