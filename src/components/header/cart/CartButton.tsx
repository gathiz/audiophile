import { RootState } from "../../../store";
import { selectAllCartItems } from "../../../store/cartSlice";
import cartImage from "/cart/cart.svg";
import { useSelector } from "react-redux";
import React from "react";

interface CartButtonProps {
    onClick: () => void;
}
const CartButton: React.FC<CartButtonProps> = ({ onClick }) => {
    const cart = useSelector((state: RootState) => selectAllCartItems(state));
    const total = cart.reduce((total, current) => {
        return total + current.quantity;
    }, 0);

    return (
        <div onClick={onClick} className="flex items-center justify-start">
            {cart && cart.length > 0 ?
                <div className="flex items-center justify-center text-white rounded-full font-bold min-w-8 min-h-8 bg-orange">
                    {total}
                </div>
                : null
            }
            <img className="cursor-pointer mx-2" src={cartImage} />
        </div>
    );
}

export default CartButton;