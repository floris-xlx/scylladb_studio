import React from 'react'

const SkeletonLoader = ({
    width = 260,
    marginTop = 0,
    height = 55
}) => {
    const formattedWidth = width !== "full" ? `w-[${width}px]` : "w-full";
    const formattedMarginTop = `mt-[${marginTop}px]`;
    const formattedHeight = height === "full" ? "h-full" : `h-[${height}px]`;

    return (
        <div className={`overflow-hidden relative ${formattedWidth} ${formattedHeight} sm:w-[385px] rounded-md bg-primary before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-neutral-400/30 before:to-transparent px-4`}>
        <div className="h-10 rounded-lg text-primary"></div>
      </div>

    )
}

export default SkeletonLoader