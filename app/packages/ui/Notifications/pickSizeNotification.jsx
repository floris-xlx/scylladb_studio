import React from 'react';
import { RulerIcon } from '@/app/packages/ui/Icon';
import toast from 'react-hot-toast';


const PickSizeNotification = () => {
  return (
    <span className="flex flex-row items-center bg-secondary">
      <RulerIcon className="w-8 h-8 text-brand-primary" />
      <span className="pl-3 text-primary text-[14px]">
        You need to pick a size before adding the item to your cart!
      </span>
    </span>
  );
};

const SizeNotification = () => toast((t) => (
  < PickSizeNotification />
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

export default SizeNotification;
