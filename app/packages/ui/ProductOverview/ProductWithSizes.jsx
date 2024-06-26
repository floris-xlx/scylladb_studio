import React, { useState, useEffect } from 'react';
import BreadCrumbs from '@/app/components/ui/Breadcrumbs/Breadcrumbs';
import ImageGrayBg from '@/app/components/ui/Images/ImageGrayBg';
import { TruckIcon } from '@/app/components/ui/Icon';
import ProductSizeChip from '@/app/components/ui/Chips/ProductSizeChip';
import FavoriteIconButton from '@/app/components/ui/Buttons/FavoriteIconButton';
import AddToCartButton from '@/app/components/ui/Buttons/AddToCartButton';
import ImageGrayBgLarge from '@/app/components/ui/Images/ImageGrayBgLarge';
import ColorGroup from '@/app/components/ui/ColorPickers/ColorGroup';

import { GetShoesByBrand, GetShoeImagesByHash, GetShoePriceByHash, IsShoeInStock } from '@/app/client/supabase/SupabaseUserData';
import { GetKeyLocalStorage, SetKeyLocalStorage } from '@/app/client/caching/LocalStorageRouter';

import { SizeNotification, CartNotification } from '@/app/components/ui/Notifications/Notifications.jsx';


const ProductWithSizes = ({
    productSizes,
    productHash,
    productName,
    productPrice,
    productBrand,
    productModel,
    productHexColor,
    productColorTag,
    productDescription,
    handleOpenModal_shoppingCart,
    userSelectedSize,
    setUserSelectedSize,
    setCartItemsCount
}) => {
    console.log("productSizes", productSizes)
    // state management
    const [selectedColor, setSelectedColor] = useState(productHexColor);

    // use the selectedColor which is always shoe_hex_color to get the same shoe_pictures using the shoe_hash, the shoe
    const [selectedProductHash, setSelectedProductHash] = useState(null);
    const [localProductImages, setLocalProductImages] = useState([]);
    // route the spotlight image
    const [spotlightImage, setSpotlightImage] = useState(localProductImages[0]);

    const [spotlightPrice, setSpotlightPrice] = useState(productPrice);

    // call the shoeprice
    useEffect(() => {
        if (selectedProductHash) {
            const fetchShoePrice = async () => {
                try {
                    const data = await GetShoePriceByHash(selectedProductHash);
                    setSpotlightPrice(data[0].shoe_price);
                } catch (error) {
                    console.error('Error fetching shoe price:', error);
                }
            };
            fetchShoePrice();
        }
    }, [selectedProductHash]);

    useEffect(() => {
        // set shoehash to the selectedProductHash
        setSelectedProductHash(productHash);
    }, [productHash]);


    // get the shoe images by the selectedProductHash
    useEffect(() => {
        if (selectedProductHash) {
            const fetchShoeImages = async () => {
                try {
                    const data = await GetShoeImagesByHash({ shoe_hash: selectedProductHash });
                    setLocalProductImages(data[0].shoe_pictures);
                    setSpotlightImage(data[0].shoe_pictures[0]);
                } catch (error) {
                    console.error('Error fetching shoe images:', error);
                }
            };

            fetchShoeImages();
        }
    }, [selectedProductHash]);


    // same brand shoes 
    const [sameBrandShoes, setSameBrandShoes] = useState([]);
    const [LocalColorData, setLocalColorData] = useState([]);

    console.log('LocalColorData:', LocalColorData);

    const shoeColorTagByHash = LocalColorData.find(shoe => shoe.shoe_hash === selectedProductHash)?.shoe_color;
    useEffect(() => {
        const fetchSameBrandShoes = async () => {
            try {
                const sameBrandShoes = await GetShoesByBrand({
                    shoe_name: productName,
                    shoe_brand: productBrand,
                });

                const inStockShoeHashes = await IsShoeInStock();

                const inStockShoeHashSet = new Set(inStockShoeHashes.map(stockShoe => stockShoe.shoe_hash));

                const filteredSameBrandShoes = sameBrandShoes.filter(shoe =>
                    inStockShoeHashSet.has(shoe.shoe_hash)
                );

                setSameBrandShoes(filteredSameBrandShoes);

                const shoeLocalColorData = filteredSameBrandShoes.map(shoe => ({
                    shoe_hash: shoe.shoe_hash,
                    shoe_color: shoe.shoe_color,
                    shoe_hex_color: shoe.shoe_hex_color,
                    shoe_images: shoe.shoe_pictures
                }));

                setLocalColorData(shoeLocalColorData);

            } catch (error) {
                console.error('Error fetching same brand shoes:', error);
            }
        };

        fetchSameBrandShoes();
    }, [productName, productBrand]);



    const handleAddShoeToCart = () => {
        // check if userSelectedSize is null or undefined, if so call the notification
        if (!userSelectedSize) {
            SizeNotification();
            return;
        }

        const shoppingCart = GetKeyLocalStorage('shoppingCart')
            ? JSON.parse(GetKeyLocalStorage('shoppingCart'))
            : [];

        const existingShoe = shoppingCart.find(item => item.shoe_hash === selectedProductHash);

        if (existingShoe) {
            existingShoe.amount += 1;
        } else {
            shoppingCart.push({ shoe_hash: selectedProductHash, amount: 1, size: userSelectedSize});
        }

        SetKeyLocalStorage('shoppingCart', JSON.stringify(shoppingCart));

        //handleOpenModal_shoppingCart();
        // shoe_name + shoe_color
        const cartItem = productName + " '" + shoeColorTagByHash + "'";
        CartNotification({ cartItem: cartItem});

        const itemsInCart = shoppingCart.reduce((acc, item) => acc + item.amount, 0);
        SetKeyLocalStorage('cartItemsCount', itemsInCart);
        setCartItemsCount(itemsInCart);
    };


    const homeText = 'Home';
    return (
        <div className="flex h-[100%] items-center justify-center !overflow-hidden">
            <div data-overlay-container="true">
                <div className="relative flex min-h-dvh flex-col bg-primary bg-radial pt-[80px] "
                    id="app-container"
                >
                    <div className="flex items-center justify-center p-4">
                        <div className="max-w-8xl h-full w-full px-2 lg:px-24">
                            <nav className="my-4 py-2">
                                <BreadCrumbs
                                    homeText={homeText}
                                    productName={productModel}
                                    productBrand={productBrand}
                                />
                            </nav>
                            <div
                                className="relative flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8"
                                id="942837-003"
                            >
                                <div className="relative h-full w-full flex-none">
                                    < ImageGrayBgLarge src={spotlightImage} alt={productName} />
                                    <div
                                        className="overflow-x-auto -mx-2 -mb-4 mt-4 flex w-full max-w-full gap-4 px-2 pb-4 pt-2 "
                                        data-orientation="horizontal"
                                        style={{ '--scroll-shadow-size': '40px' }}
                                        data-left-scroll="false"
                                        data-right-scroll="true"
                                    >
                                        {localProductImages.map((image, index) => (
                                            <ImageGrayBg
                                                key={index}
                                                src={image}
                                                alt={productName}
                                                spotlightImage={spotlightImage}
                                                setSpotlightImage={setSpotlightImage}
                                            />
                                        ))}

                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="text-2xl font-bold tracking-tight text-primary select-none">
                                        {productModel}
                                    </h1>
                                    <h2 className="sr-only select-none">Product information</h2>

                                    <p className="text-xl text-primary mt-2 font-medium tracking-tight select-none">
                                        € {spotlightPrice}
                                    </p>
                                    <div className="mt-4">
                                        <p className="sr-only select-none">Product description</p>
                                        <p className="line-clamp-3 text-medium text-default-500 select-none">
                                            {productDescription}
                                        </p>
                                    </div>
                                    <div
                                        className="relative flex flex-col gap-2 ml-1 mt-6"
                                        aria-label="Color"
                                        role="radiogroup"
                                        aria-orientation="horizontal"
                                        id="react-aria7768599143-:rb:"
                                    >
                                        <div
                                            className="flex flex-col flex-wrap gap-2"
                                            role="presentation"
                                            data-orientation="horizontal"
                                        >
                                            < ColorGroup
                                                LocalColorData={LocalColorData}
                                                selectedColor={selectedColor}
                                                setSelectedColor={setSelectedColor}
                                                setSelectedProductHash={setSelectedProductHash}
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-6 flex flex-col gap-1">
                                        <div className="mb-4 flex items-center gap-2 text-default-700">
                                            < TruckIcon className="w-6 h-6 text-primary" />
                                            <p className="text-small font-medium">
                                                Free shipping
                                            </p>
                                        </div>
                                        <div
                                            className="relative flex flex-col gap-1"
                                            aria-label="Select size"
                                            role="radiogroup"
                                            aria-orientation="horizontal"
                                            id="react-aria7768599143-:rq:"
                                        >
                                            <div
                                                className="flex flex-col flex-wrap gap-3 data-[orientation=horizontal]:flex-row"
                                                role="presentation"
                                                data-orientation="horizontal"
                                            >
                                                {productSizes.map(size => (
                                                    <ProductSizeChip key={size} size={size} setSelectedSize={setUserSelectedSize} selectedSize={userSelectedSize} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-8 flex items-center flex-row gap-2 max-w-[400px]">
                                        < AddToCartButton showCartIcon={true} handleAddShoeToCart={handleAddShoeToCart} />
                                        < FavoriteIconButton />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductWithSizes;
