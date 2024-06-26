import React, { useState, useEffect, Fragment } from 'react';
import Image from 'next/image';

import CrossButton from '@/app/components/ui/Buttons/CrossButton';
import PriceLabelShoppingCart from '@/app/components/ui/Labels/PriceLabelShoppingCart';
import ItemLabelShoppingCart from '@/app/components/ui/Labels/ItemLabelShoppingCart';
import SizeAndColorLabel from '@/app/components/ui/Labels/SizeAndColorLabel';
import NoPendingTrades from '@/app/components/ui/EmptyStates/NoPendingTrades';
import SpinnerWithLabel from '@/app/components/ui/Loading/SpinnerWithLabel';

import { GetKeyLocalStorage, SetKeyLocalStorage } from '@/app/client/caching/LocalStorageRouter';
import { GetShoeDataByHash, GetShoePriceByHash } from '@/app/client/supabase/SupabaseUserData';

const ShoppingCart = ({ setIsCartEmpty, setCartItemsCount }) => {
    const [loading, setLoading] = useState(true);
    const [deliveryCost, setDeliveryCost] = useState(0);
    const [subtotal, setSubtotal] = useState(0);
    const total = deliveryCost + subtotal;

    const [cartItems, setCartItems] = useState([]);

    const priceFormatting = (price) => {
        const formattedPrice = price >= 1000 
            ? price.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.') 
            : price.toFixed(2).replace('.', ',');
        return `€ ${formattedPrice}`;
    };

    const handleItemDeletion = (productHash) => {
        const cartItems = GetKeyLocalStorage('shoppingCart');
        
        if (cartItems) {
            const parsedItems = JSON.parse(cartItems);
            const updatedItems = parsedItems.filter(item => item.shoe_hash !== productHash);
            SetKeyLocalStorage('shoppingCart', JSON.stringify(updatedItems));

            const enrichCartItems = async (items) => {
                return await Promise.all(items.map(async (item) => {
                    const shoeData = await GetShoeDataByHash(item.shoe_hash);
                    const shoePrice = await GetShoePriceByHash(item.shoe_hash);

                    return {
                        ...item,
                        ...shoeData[0], // Assuming GetShoeDataByHash returns an array with the shoe data as the first element
                        imageUrl: shoeData[0].shoe_pictures[0], // Take the first image from the list
                        name: shoeData[0].shoe_brand + ' ' + shoeData[0].shoe_name,
                        color: shoeData[0].shoe_color,
                        size: shoePrice[0].size, // FIXME custom size routing and price fetching
                        price: shoePrice[0].shoe_price,
                        quantity: item.amount
                    };
                }));
            };

            enrichCartItems(updatedItems).then(enrichedItems => {
                setCartItems(enrichedItems); // Update the state with the new enriched cart items
                
                const cartAmount = GetKeyLocalStorage('shoppingCart');
                if (cartAmount) {
                    const parsedItems = JSON.parse(cartAmount);
                    const itemsInCart = parsedItems.reduce((total, item) => total + item.amount, 0);
                    SetKeyLocalStorage('cartItemsCount', itemsInCart);
                    setCartItemsCount(itemsInCart);
                }
                
            });
        }
    };

    useEffect(() => {
        const fetchCartItems = async () => {
            const cartItems = GetKeyLocalStorage('shoppingCart');
            if (cartItems) {
                const parsedItems = JSON.parse(cartItems);
                
                const itemsWithDetails = await Promise.all(parsedItems.map(async (item) => {
                    const shoeData = await GetShoeDataByHash(item.shoe_hash);
                    const shoePrice = await GetShoePriceByHash(item.shoe_hash);

                    return {
                        ...item,
                        ...shoeData[0], // Assuming GetShoeDataByHash returns an array with the shoe data as the first element
                        imageUrl: shoeData[0].shoe_pictures[0], // Take the first image from the list
                        name: shoeData[0].shoe_brand + ' ' + shoeData[0].shoe_name,
                        color: shoeData[0].shoe_color,
                        size: item.size,
                        price: shoePrice[0].shoe_price,
                        quantity: item.amount
                    };
                }));
                setCartItems(itemsWithDetails);
                setLoading(false);

                const cartAmount = GetKeyLocalStorage('shoppingCart');
                if (cartAmount) {
                    const parsedItems = JSON.parse(cartAmount);
                    const itemsInCart = parsedItems.reduce((total, item) => total + item.amount, 0);
                    SetKeyLocalStorage('cartItemsCount', itemsInCart);
                    setCartItemsCount(itemsInCart);
                }
            }
        };
        fetchCartItems();
    }, []);
    
    // count the total with useEffect and update the state
    useEffect(() => {
        const total = cartItems.reduce((acc, item) => {
            return acc + item.price * item.quantity;
        }, 0);
        setSubtotal(total);
    }, [cartItems]);


    return (
        <div>
            <form
                className="flex flex-col gap-3 min-h-[255px]"
                style={{ zIndex: 1, opacity: 1, transform: 'none' }}
            >
                <div>
                    <h3 className="sr-only">Items in your cart</h3>
                    <ul>
                        {cartItems.map(item => (
                            <li
                                key={item.id}
                                className="flex items-center gap-x-4 border-b-small border-divider py-4"
                                id={item.id}
                            >
                                <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center">
                                    <div
                                        className="relative shadow-black/5 shadow-none rounded-large"
                                        style={{ maxWidth: 'fit-content' }}
                                    >
                                        <Image
                                            src={item.imageUrl}
                                            className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
                                            alt={item.name}
                                            width={80}
                                            height={80}
                                            data-loaded="true"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-1 flex-col">
                                    <ItemLabelShoppingCart name={item.name} />
                                    <SizeAndColorLabel size={item.size} color={item.color} />
                                    <PriceLabelShoppingCart price={item.price} quantity={item.quantity} />
                                </div>
                                
                                <CrossButton onClick={() => handleItemDeletion(item.shoe_hash)} />
                            </li>
                        ))}
                    </ul>

                    {loading ? (
                        <Fragment>
                            <SpinnerWithLabel label={'Loading cart'} />
                        </Fragment>
                    ) : (
                        cartItems.length === 0 && (
                            <>
                                {setIsCartEmpty(true)}
                                <div className="py-[60px]">
                                    <NoPendingTrades 
                                        title={"Oh no! your shopping cart is empty"} 
                                        description='As you add products to your cart, they will appear here.' 
                                    />
                                </div>
                            </>
                        )
                    )}

                    {cartItems.length > 0 && !loading && (
                        <div>
                            {setIsCartEmpty(false)}
                            <dl className="flex flex-col gap-4 py-4">
                                <div className="flex justify-between">
                                    <dt className="text-small text-default-500">Subtotal</dt>
                                    <dd className="text-small font-semibold text-default-700">
                                        {priceFormatting(subtotal)}
                                    </dd>
                                </div>
                                <div className="flex justify-between">
                                    <dt className="text-small text-default-500">Delivery</dt>
                                    <dd className="text-small font-semibold text-default-700">
                                        {deliveryCost === 0 ? (
                                            <span className="text-brand-primary text-[14px] font-semibold">
                                               Free <s>€ {deliveryCost.toFixed(2)}</s> 
                                            </span>
                                        ) : (
                                            `€ ${deliveryCost.toFixed(2)}`
                                        )}
                                    
                                    </dd>
                                </div>
                                <hr
                                    className="shrink-0 bg-divider border-none w-full h-divider"
                                    role="separator"
                                ></hr>
                                <div className="flex justify-between">
                                    <dt className="text-small font-semibold text-default-500">Total</dt>
                                    <dd className="text-small font-semibold text-default-700">
                                        {priceFormatting(total)}
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
};

export default ShoppingCart;
