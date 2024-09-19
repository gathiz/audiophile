import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { selectProduct } from "../../../store/productSlice";
import { CartRowItem } from "../../../types";
import React from "react";
import {formatCurrency} from "../../../util";

interface CartItemProps {
    item: CartRowItem;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
    const product = useSelector((state: RootState) => selectProduct(item.slug)(state));
    const quantity = item.quantity;
    return (
        <div className="flex w-full items-center bg-gray-100 justify-start my-2">
            <div className="flex items-center justify-center w-1/5">
                <img
                    src={product?.cart.icon}
                    alt=""
                />
            </div>
            <div className="flex w-3/5 flex-col items-start justify-center px-2">
                <p className="text-sm font-bold">{product?.name}</p>
                <p className="opacity-50 text-sm">{`$ ${formatCurrency(product!.price)}`}</p>
            </div>
            <div className="flex w-1/5 items-center justify-end mr-2">
                <p>{quantity}</p>
            </div>
        </div>
    );
}

export default CartItem;