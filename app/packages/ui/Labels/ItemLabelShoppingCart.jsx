import React from 'react';

const ItemLabelShoppingCart = ({ name }) => {
    return (
        <h4 className="text-small">
            <h2
                className="relative inline-flex items-center tap-highlight-transparent outline-none  data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus text-medium active:opacity-disabled transition-opacity underline-offset-4 font-medium text-foreground"
                tabIndex="0"
            >
                {name}
            </h2>
        </h4>
    )
}

export default ItemLabelShoppingCart;
