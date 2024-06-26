import React from 'react';

const TextHeading = ({
    title,
    subText
}) => {

    return (
        <div className="flex flex-col text-left mt-[90px] ">
            <h2 className="text-primary text-left">{title}</h2>
            <p className="text-left text-primary">
                {subText}
            </p>
        </div>
    );
}

export default TextHeading;