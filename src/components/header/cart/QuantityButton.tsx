import React from "react";

interface QuantityButtonProps {
    onDecrementClick: () => void;
    onIncrementClick: () => void;
    quantity: number;
  }

const QuantityButton: React.FC<QuantityButtonProps> = (props) => {
    return (
        <div className="flex items-center justify-end bg-gray-200 md:p-2 h-12">
            <button
                type="button"
                aria-label="Subtract item from total."
                onClick={props.onDecrementClick}
                className="text-xl mx-2 text-black hover:text-orange focus:text-orange"
            >
                -
            </button>
            <span className="font-bold mx-2">{props.quantity}</span>
            <button
                type="button"
                aria-label="Add item to total."
                onClick={props.onIncrementClick}
                className="text-xl mx-2 text-black hover:text-orange focus:text-orange"
            >
                +
            </button>
        </div>
    );
}

export default QuantityButton;