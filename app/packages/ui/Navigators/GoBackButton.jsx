import React from 'react';
import ButtonIcon from '@/app/components/ui/Buttons/ButtonIcon';

import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const GoBackButton = () => {
    return (
        <div className="z-10">
            <ButtonIcon
                onPress={() => window.history.back()}
                aria-label="Go back"
            >
                <ArrowLeftIcon className="h-7 w-7 text-icon" />
            </ButtonIcon>
        </div>
    );
}

export default GoBackButton;