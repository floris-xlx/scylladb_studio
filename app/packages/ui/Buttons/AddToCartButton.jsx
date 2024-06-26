import { Spinner } from "@nextui-org/spinner";
import Ripples from 'react-ripples'

import { ShoppingCartIcon } from "@/app/components/ui/Icon";

const AddToCartButton = ({
    isLoading = false,
    showCartIcon = false,
    handleAddShoeToCart
}) => {
    const isLoadingStyling = "!cursor-normal !bg-brand-disabled !hover:bg-brand-disabled"

    return (
        <Ripples className="w-full h-fit">
            <button
                className={`z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap overflow-hidden outline-none px-4 min-w-20 h-10 text-small gap-2 rounded-md w-full   motion-reduce:transition-none text-white font-medium bg-brand-primary hover:bg-brand-secondary  ${isLoading ? isLoadingStyling : ''}`}
                type="button "
                onClick={handleAddShoeToCart}
            >

                {isLoading ? (
                    <Spinner color="warning" size="sm" />
                ) : (
                    <>
                        {showCartIcon && <ShoppingCartIcon className="w-5 h-5" />}
                        Add to cart
                    </>
                )}

            </button>
        </Ripples>
    );
}

export default AddToCartButton;