import React from "react";

interface BoxItemProps {
    quantity: number;
    title: string;
}

const BoxItem: React.FC<BoxItemProps> = ({quantity, title}) => {
    return(
        <div className="flex">
            <p className="text-orange font-bold my-2">{quantity}x</p>
            <p className="m-2 px-2">{title}</p>
        </div>
    );
}

export default BoxItem;