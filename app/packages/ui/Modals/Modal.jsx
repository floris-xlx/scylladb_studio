import React, { useState, useEffect, useImperativeHandle, forwardRef } from 'react';

// modal
import {
Modal as NextModal,
ModalContent,
ModalHeader,
ModalBody,
ModalFooter,
} from '@nextui-org/modal';

// next button
import { Button, Spinner, useDisclosure } from '@nextui-org/react';
import { SetKeyLocalStorage } from '@/app/packages/caching/LocalStorageRouter';

const Modal = forwardRef(({
    buttonText,
    title,
    buttonColor = 'primary',
    children,
    onButtonPress
}, ref) => {

    // global usestate for the modal open/close state
    const [isModalOpen, setIsModalOpen] = useState(false);


    // loading
    const [isLoading, setLoading] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen((prev) => !prev);
        
        if (isModalOpen) {
            SetKeyLocalStorage("BLOCKED_FROM_PALETTE_EVENT", false);
        } else { 
            SetKeyLocalStorage("BLOCKED_FROM_PALETTE_EVENT", true);
        }
    };
    
    // expose the handleOpenModal function
    useImperativeHandle(ref, () => ({
        handleOpenModal,
    }));

    // modal states
    const { isOpen, onOpen, onClose } = useDisclosure();

    // call the states according to isModalOpenState boolean
    useEffect(() => {
        if (isModalOpen) {
            onOpen();
            SetKeyLocalStorage("BLOCKED_FROM_PALETTE_EVENT", true);
        } else {
            onClose();
            SetKeyLocalStorage("BLOCKED_FROM_PALETTE_EVENT", false);
        }
    }, [isModalOpen, onOpen, onClose]);

    // Ensure modal state is set to false when modal is closed
    useEffect(() => {
        if (!isOpen) {
            setIsModalOpen(false);
            SetKeyLocalStorage("BLOCKED_FROM_PALETTE_EVENT", false);
        }
    }, [isOpen]);

    // button colors
    const buttonColorPrimary = 'bg-brand-primary hover:bg-brand-secondary transition text-white';
    const buttonColorSecondary = 'bg-red-primary hover:bg-red-highlight transition text-white';
    
    // set the button color based on the buttonColor prop
    const [currentButtonColor, setCurrentButtonColor] = useState(buttonColor === 'primary' ? buttonColorPrimary : buttonColorSecondary);

    return (
        <NextModal
            backdrop={'blur'}
            isOpen={isOpen}
            onClose={onClose}
            className="bg-secondary rounded-md text-primary border border-primary !w-full"
            >
            <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-1 text-primary bg-secondary rounded-md text-lg select-none">
                    {title}
                </ModalHeader>

                <ModalBody className="text-md text-secondary select-none">
                    {children}
                </ModalBody>
                    <ModalFooter>
                    {isLoading ? (
                    <Button
                        color="danger"
                        className={`${buttonColor === 'primary' ? 'bg-brand-primary' : 'bg-red-primary'} transition text-gray-300 items-center cursor-not-allowed`}
                    >
                        <div className="mr-1 mt-1">
                            <Spinner size="sm" color="secondary" />
                        </div>
                        {buttonText}
                    </Button>
                    ) : (
                    <Button
                        color="secondary"
                        onPress={async () => { 
                            // run the button event
                            setLoading(true);
                            await onButtonPress(); 
                            
                            // wait for isLoading to be false before closing
                            if (!isLoading) {
                                onClose();
                                setLoading(false);
                            }
                        }}
                        className={currentButtonColor}
                    >
                        {buttonText}
                    </Button>
                    )}
                    </ModalFooter>
                </>
            )}
            </ModalContent>
        </NextModal>
    );
});

Modal.displayName = 'Modal';

export { Modal };
