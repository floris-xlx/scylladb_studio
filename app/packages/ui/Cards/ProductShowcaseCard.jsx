'use client';

import React, { useEffect, useState } from "react";
import { EyeIcon } from "@heroicons/react/24/outline";

import { GetShoeImagesByShoeHash } from "@/app/packages/supabase/SupabaseUserData";

const ProductShowcaseCard = ({
    shoeHash = "430bee51-9bee-4f3a-89d8-77a1243ced61",
    shoePrice = 200,
    shoeSize = 44,
    shoeCondition = "new"
}) => {

    const [shoeImages, setShoeImages] = useState(["https://xylex.ams3.cdn.digitaloceanspaces.com/frosteKicks/yeezy_foam_rnr/carbon/1.webp"]);
    const [shoeName, setShoeName] = useState("");
    const [ShoeColor, setShoeColor] = useState("");

    const fullShoeName = `${shoeName} ${ShoeColor}`;


    // useeffectr
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await GetShoeImagesByShoeHash(shoeHash);

                console.log("GetShoeImagesByShoeHash data", data);

                if (shoeHash) {
                    setShoeImages(data[0].shoe_pictures);
                    setShoeName(data[0].shoe_name);
                    setShoeColor(data[0].shoe_color);
                }
                console.log("shoeImages", shoeImages);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);




    return (
        <div>
            <div className="flex flex-col h-full bg-primary rounded-md sm:h-[400px] border-primary border w-[300px]">
                <div className="flex flex-col h-[400px] ">
                    <div className="flex flex-row justify-between items-center pt-4 pl-6 pr-6 pb-3 whitespace-nowrap overflow-hidden text-lg sm:text-sm md:text-lg lg:text-lg text-primary select-none font-semibold">
                        {fullShoeName.length > 30 ? `${fullShoeName.substring(0, 30)}...` : fullShoeName}
                    </div>

                    <div className="flex flex-row justify-between items-center pl-6 pr-6 ">
                        <div className="rounded-md h-[150px] w-full bg-primary">

                            {shoeImages && shoeImages.length > 0 && (
                                <img
                                    src={shoeImages[0]}
                                    alt="Shoe Image"
                                    className="object-cover h-full w-full rounded-md"
                                />
                            )}

                        </div>
                    </div>

                    <div className="flex flex-row justify-between px-6 py-4">
                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-col justify-between items-center ">


                                <div className='flex flex-row justify-between items-center'>
                                    <p className='select-none w-[170px] text-primary items-center flex'>Price</p>
                                    <span
                                        className="rounded-md bg-input-primary p-[3px] text-accent text-center text-[14px] mt-2 select-none transition ml-[22px] px-2 w-[60px] h-[27px] flex items-center"

                                    >
                                        {shoePrice}
                                    </span>
                                </div>

                                <div className='flex flex-row justify-between items-center'>
                                    <p className='select-none w-[170px] text-primary items-center flex'>Size</p>
                                    <span
                                        className="rounded-md bg-input-primary p-[3px] text-accent text-center text-[14px]  mt-2 select-none transition ml-[22px] px-2 w-[60px] h-[27px] flex items-center"

                                    >
                                        {shoeSize}
                                    </span>
                                </div>

                                <div className='flex flex-row justify-between items-center'>
                                    <p className='select-none w-[170px] text-primary items-center flex'>Condition</p>
                                    <span
                                        className="rounded-md bg-input-primary p-[3px] text-accent text-center text-[14px] mt-2 select-none transition ml-[22px] px-2 w-[60px] h-[27px] flex items-center"

                                    >
                                        {shoeCondition.charAt(0).toUpperCase() + shoeCondition.slice(1)}
                                    </span>
                                </div>









                            </div>
                        </div>



                    </div>
                    {/*
                    for doing da journaling */}
                    <div className="flex w-full px-6 flex-row">
                        <button
                            type="button"
                            className="inline-flex items-center rounded-md bg-primary hover:bg-accent px-4 h-[43px] text-sm font-medium text-primary focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition w-full select-none"
                        // onClick={() => handleStrategyCardClick(shoeHash)}
                        >
                            <EyeIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                            View listing
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductShowcaseCard;