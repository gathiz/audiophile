import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { CartRowItem } from "../../../types";
import { removeProduct, selectAllCartItems, updateItemQuantity } from "../../../store/cartSlice";
import QuantityButton from "./QuantityButton";
import { selectProduct } from "../../../store/productSlice";
import {formatCurrency} from "../../../util";

interface CartItemProps {
    item: CartRowItem;
}

const CartItem: React.FC<CartItemProps> = ({item}) => {
    const useAppDispatch = () => useDispatch<AppDispatch>();
    const quantity = item.quantity;
    const slug = item.slug;
    const dispatch = useAppDispatch();
    const cart = useSelector((state: RootState) => selectAllCartItems(state));
    const product = useSelector((state: RootState) => selectProduct(item.slug)(state));
  
    const currentProduct = cart.find(item => {
      return item.slug === slug;
    });

    const handleDecrementClick = () => {
        if (currentProduct && quantity > 1) {
            currentProduct.quantity--;
            const slugQuantity = { slug: slug, quantity: currentProduct.quantity };
            dispatch(updateItemQuantity(slugQuantity));
        }
        if (quantity === 1) {
            dispatch(removeProduct(slug))
        }
    };

    const handleIncrementClick = () => {
        if (currentProduct && quantity < 100) {
            currentProduct.quantity++;
            const slugQuantity = { slug: slug, quantity: currentProduct.quantity };
            dispatch(updateItemQuantity(slugQuantity));
        }
    };


    return (
        <div className="flex items-center w-full p-2">
            <div className="flex w-1/5 md:1/6">
            <img
                src={product?.cart.icon}
                alt=""
                className="rounded-lg w-14 h-14"
            />
            </div>
            <div className="flex flex-col w-4/5 md:2/3 items-start">
                <p className="font-bold">{product?.name}</p>
                <p className="">{`$ ${formatCurrency(product!.price)}`}</p>
            </div>
            <div className="flex w-1/5 md:1/6">
            <QuantityButton
                quantity={quantity}
                onDecrementClick={handleDecrementClick}
                onIncrementClick={handleIncrementClick}
            />
            </div>
        </div>
    )
}

export default CartItem;