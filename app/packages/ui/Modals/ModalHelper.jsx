import { useRef } from 'react';
import { Modal } from '@/app/packages/ui/Modals/Modal';

// helper function to create a modal reference and its open handler
const useModal = () => {
    const modalRef = useRef();

    const handleOpenModal = () => {
        if (modalRef.current) {
            modalRef.current.handleOpenModal();
        }
    };

    return { modalRef, handleOpenModal };
};

export { Modal, useModal };
