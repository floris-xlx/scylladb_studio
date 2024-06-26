import React, { useState, useEffect } from 'react';
import SkeletonLoader from '@/app/packages/ui/Loading/SkeletonLoader';

const ImageHoverZoom = ({
    image_src,
    loading: initialLoading = true
}) => {
    const [loading, setLoading] = useState(initialLoading);

    useEffect(() => {
        // When the component mounts, we set up an image loader
        const img = new Image();
        img.src = image_src;
        img.onload = () => {
            setLoading(false); // Set loading to false when the image is loaded
        };
    }, [image_src]);

    return (
        <div className="flex w-[240px] h-[240px]">
            {loading ? (
                <SkeletonLoader width={'full'} height={'full'} />
            ) : (
                <img
                    src={image_src}
                    className="relative opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large z-0 h-full max-h-full w-full max-w-[100%] overflow-visible object-contain object-center hover:scale-110"
                    alt="Sneakers"
                    data-loaded={!loading}
                />
            )}
        </div>
    );
}

export default ImageHoverZoom;
