import React, { useState, useEffect, Suspense } from 'react';
import ProductCard from '@/app/components/ui/Cards/ProductCard';
import { SetKeyLocalStorage } from '@/app/client/caching/LocalStorageRouter';
import SkeletonProductCard from '@/app/components/ui/Loading/SkeletonProductCard';

const ProductList = ({
    productData,
    productCatalog,
    handleOpenModal_shoppingCart,
    loading,
    setCartItemsCount
}) => {
    // handle drilldown view
    const [drilldownHash, setDrilldownHash] = useState('');
    const [isGlobalDrilldownView, setIsGlobalDrilldownView] = useState(false);

    useEffect(() => {
        if (drilldownHash) {
            SetKeyLocalStorage("scopedShoeHash", drilldownHash);
        }
    }, [drilldownHash]);

    const mergedData = productData.map(stockItem => {
        const catalogItem = productCatalog.find(catalogItem => catalogItem.shoe_hash === stockItem.shoe_hash);
        if (catalogItem) {
            return {
                ...catalogItem,
                ...stockItem
            };
        }
        return null;
    }).filter(item => item !== null);

    return (
        <div className="flex mx-auto mt-6 w-full">
            <div className={`grid ${isGlobalDrilldownView ? 'flex w-full transition' : 'w-full grid-cols-1 gap-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-2'}`}>
                {mergedData
                    .filter(product => !isGlobalDrilldownView || product.shoe_hash === drilldownHash)
                    .map((product) => (
                        <ProductCard
                            key={product.id}
                            shoeBrand={product.shoe_brand}
                            shoeColor={product.shoe_color}
                            title={product.shoe_name}
                            price={product.shoe_price}
                            image={product.shoe_pictures[0]}
                            shoeHash={product.shoe_hash}
                            setDrilldownHash={setDrilldownHash}
                            setIsGlobalDrilldownView={setIsGlobalDrilldownView}
                            allImages={product.shoe_pictures}
                            handleOpenModal_shoppingCart={handleOpenModal_shoppingCart}
                            setCartItemsCount={setCartItemsCount}
                        />
               
                    ))}

                {loading && [...Array(8)].map((_, index) => (
                    <SkeletonProductCard key={index} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;

