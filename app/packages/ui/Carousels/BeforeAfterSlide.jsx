import React, { useEffect, useState } from "react";
import Image from "next/image";


const BeforeAfterSlide = () => {

    const beforeAfter = [
        'https://xylex.ams3.cdn.digitaloceanspaces.com/EagleFitness/BeforeAfter/floris_before_after.jpg',
        'https://xylex.ams3.cdn.digitaloceanspaces.com/EagleFitness/BeforeAfter/before_after_1.jpeg',
        'https://xylex.ams3.cdn.digitaloceanspaces.com/EagleFitness/BeforeAfter/before_after_2.jpeg',
        'https://xylex.ams3.cdn.digitaloceanspaces.com/EagleFitness/BeforeAfter/before_after_3.jpeg',
        'https://xylex.ams3.cdn.digitaloceanspaces.com/EagleFitness/BeforeAfter/before_after_4.jpeg',
        'https://xylex.ams3.cdn.digitaloceanspaces.com/EagleFitness/BeforeAfter/before_after_5.jpeg',
        'https://xylex.ams3.cdn.digitaloceanspaces.com/EagleFitness/BeforeAfter/before_after_6.jpeg',

    ]
    const [currentIndex, setCurrentIndex] = useState(0)


    const handleNext = () => {
        if (currentIndex === beforeAfter.length - 1) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(currentIndex + 1)
        }
    }

    const handlePrev = () => {
        if (currentIndex === 0) {
            setCurrentIndex(beforeAfter.length - 1)
        } else {
            setCurrentIndex(currentIndex - 1)
        }
    }

    return (
        <div className="h-[300px] w-full max-w-[600px] flex mx-auto flex-col px-2">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-300 flex items-center mx-auto mb-7 select-none ">Bekijk de transformaties</h1>
            <div className="flex flex-row gap-x-[40px]">
                

                <div className="w-fit min-w-[40px] items-center flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-3 bg-primary hover:bg-blue-700 cursor-pointer transition rounded-md p-2"
                    onClick={handlePrev}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>

                </div>

                <div className="w-full">
                    <Image src={beforeAfter[currentIndex]} width={580} height={350} alt="Before and after" className="rounded-md"/>
                </div>

                <div className=" w-fit min-w-[40px] items-center flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-3 bg-primary rounded-md p-2 hover:bg-blue-700 cursor-pointer transition"
                    onClick={handleNext}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>

                </div>
            </div>
        </div>

    );
};

export default BeforeAfterSlide;
