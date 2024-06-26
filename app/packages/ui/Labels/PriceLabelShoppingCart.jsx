import React from 'react';

const PriceLabelShoppingCart = ({price, quantity}) => {
    return (
        <div className="mt-2 flex items-center gap-2">
        <span className="text-small font-semibold text-default-700">
            € {price}
        </span>
        <span className="text-small text-default-500">x {quantity}</span>
    </div>
    )
}

export default PriceLabelShoppingCart;