import { emptyCart, selectAllCartItems } from "../../../store/cartSlice";
import { AppDispatch, RootState } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../cart/CartItem";
import { formatCurrency } from "../../../util";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface ConfirmDialogProps {
    hidden: boolean;
    onBack: () => void;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({ hidden, onBack }) => {
    const navigate = useNavigate();
    const useAppDispatch = () => useDispatch<AppDispatch>();
    const dispatch = useAppDispatch();

    const [confirmed,setConfirmed] = useState(false);

    const cartItems = useSelector((state: RootState) => selectAllCartItems(state));
    const total = cartItems.reduce((total, current) => {
        return total + (current.quantity * current.price);
    }, 0);

    const handleGoBack = () => {
        onBack();
    }

    const handleClick = () => {
        if(!confirmed){
            setConfirmed(true);
        } else {
            dispatch(emptyCart());
            navigate("/")
        }
    }


    return (
        <div className={`absolute ${hidden ? "hidden" : ""} w-11/12 bg-white rounded-lg shadow-lg
         border-2 border-gray-300 left-0 lg:w-1/4 lg:left-1/2 top-1/4 
         flex flex-col items-start m-4 p-4`}>
            <button onClick={handleGoBack} className="font-bold mt-4">Go Back</button>
            <h1 className="text-2xl font-bold uppercase mt-4">
                {`${confirmed ? "Thank you for your order" : "Please Confirm your order"}`}
                </h1>
            <div className="flex flex-col w-full divide-y items-center justify-between">
                {cartItems.map((item,index) => (
                    <CartItem key={index} item={{
                        slug: item.slug,
                        price: item.price,
                        quantity: item.quantity
                    }} />
                ))}
            </div>
            <div className="flex w-full items-center justify-between mt-4">
                <h1 className="text-xl font-bold uppercase">Grand Total</h1>
                <h1 className="text-xl font-bold uppercase">{formatCurrency(total)}</h1>
            </div>
            <div className="w-full flex items-center mt-4">
                <button onClick={handleClick} className="w-full text-white font-bold rounded-lg bg-orange uppercase py-4 px-6">
                    {`${confirmed ? "Back to Home" : "Confirm"}`}
                </button>
            </div>
        </div>
    );
}

export default ConfirmDialog;