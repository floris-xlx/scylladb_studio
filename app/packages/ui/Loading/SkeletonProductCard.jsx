import React from "react";
import SkeletonLoader from '@/app/components/ui/Loading/SkeletonLoader';

const SkeletonProductCard = () => {
    return (
        <div
            className="relative flex max-w-full flex-none scroll-ml-6 flex-col gap-3 p-4  shadow-none w-full snap-start cursor-default bg-transparent  rounded-md select-none "
        >
            <div className="relative flex h-52 max-h-full w-full flex-col items-center justify-center overflow-visible rounded-medium bg-content2">
                <div className="flex sm:w-[225px] h-[225px] w-full ">
                    <SkeletonLoader width={'full'} height={'full'} />
                </div>

            </div>

            <div className="flex flex-col gap-x-3 px-1">
                <a className="flex items-center justify-between">
                    <div className="flex w-[125px] h-[30px] pb-2 ">
                        <SkeletonLoader width={'full'} height={'full'} />
                    </div>

                    <div className="flex w-[50px] h-[30px] pb-2 ">
                        <SkeletonLoader width={'full'} height={'full'} />
                    </div>
                </a>

                <div className="flex w-[50px] h-[30px] pb-2 mb-1 ">
                    <SkeletonLoader width={'full'} height={'full'} />
                </div>

                <div className="flex w-[216px] h-[40px]">
                    <SkeletonLoader width={'full'} height={'full'} />
                </div>
            </div>
        </div>
    )
}

export default SkeletonProductCard;