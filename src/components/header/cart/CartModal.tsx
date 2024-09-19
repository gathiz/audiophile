import { AppDispatch, RootState } from "../../../store";
import { emptyCart, selectAllCartItems } from "../../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../../util";
import React from "react";

interface ShoppingCartProps {
    onClick: () => void;
    hidden: boolean;
}


const CartModal: React.FC<ShoppingCartProps> = ({ onClick, hidden }) => {
    const useAppDispatch = () => useDispatch<AppDispatch>();
    const dispatch = useAppDispatch();
    const cartItems = useSelector((state: RootState) => selectAllCartItems(state));
    const total = cartItems.reduce((total, current) => {
        return total + current.quantity * current.price;
    }, 0);

    const handleEmptyCart = () => {
        dispatch(emptyCart());
    }

    return (
        <div className={`absolute z-10 top-[4.125rem] right-0 w-full px-4 mx-4 md:w-1/2 h-max ${hidden ? "hidden" : ""}`}>
            <div className="flex flex-col justify-between bg-white border-2 border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between px-4 mt-4">
                    <p className="font-bold">Cart</p>
                    <p onClick={handleEmptyCart} className="text-dark-gray cursor-pointer">Empty Cart</p>
                </div>
                <div className="flex flex-col mt-4 justify-between w-full">
                    {cartItems.map((cartItem,index) => (
                        <CartItem key={index} item={cartItem} />
                    ))}
                </div>
                <div className="flex justify-between mt-4 mx-2">
                    <p className="font-bold uppercase">Total</p>
                    <p className="font-bold text-dark-gray">{formatCurrency(total)}</p>
                </div>
                <div className="flex flex-col rounded-lg w-full items-center justify-center py-2 mt-2">
                    <Link
                        to="/checkout"
                        onClick={onClick}
                        className="w-full bg-orange mt-4 px-8 py-4 text-center font-bold text-white uppercase">
                        Checkout
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CartModal;
