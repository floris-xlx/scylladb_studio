import React from "react";

const TypographyCard = ({
    title,
    children
}) => {
  return (
    <div className="p-4 border border-primary rounded-lg w-full">
      <h5 className=" mb-2 pb-2 text-primary">{title}</h5>
      <p className="text-gray-600">{children}</p>
    </div>
  );
}

export default TypographyCard;