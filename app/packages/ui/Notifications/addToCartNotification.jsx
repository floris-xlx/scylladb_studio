import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import toast, { Toaster } from 'react-hot-toast';


const AddToCartNotification = ({ cartItem }) => {
  const item = cartItem || "The item";
  return (
    <span className="flex flex-row items-center bg-secondary">
      <ShoppingCartIcon className="w-8 h-8 mr-2 text-brand-primary" />
      <span className="text-primary text-[14px]">
        <span className="font-bold">{item}</span> was successfully added to your cart!
      </span>
    </span>

  );
};

const CartNotification = ({ cartItem }) => toast((t) => (
  < AddToCartNotification cartItem={cartItem} />
), {

  style: {
    backgroundColor: 'var(--color-secondary)',
    color: 'var(--color-border-primary)',
    borderColor: 'var(--color-border-primary)',
    borderStyle: 'solid',
    borderWidth: '1px',
    userSelect: 'none',
    width: 'full',
    maxWidth: '430px',
  },
  duration: 3500
}
);

export default CartNotification;
