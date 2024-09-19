import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { selectAllCartItems } from "../../store/cartSlice";
import CartItem from "./cart/CartItem";
import SummaryItem from "./cart/SummaryItem";


const CartSummary = () => {
    const cartItems = useSelector((state: RootState) => selectAllCartItems(state));
    const total = cartItems.reduce((total, current) => {
        return total + (current.quantity * current.price);
    }, 0);

    const shipping = 50;
    const vat = Math.round(0.2 * total);
    const grandTotal = total + shipping + vat;

    const summaryItems = [
        { title: "Total", amount: total },
        { title: "Shipping", amount: 50, },
        { title: "Vat(Included)", amount: vat },
        { title: "Grand Total", amount: grandTotal }
    ];

    return (
        <div className={`flex w-full mt-8 px-4 md:m-4 ${cartItems.length === 0 ? "hidden" : ""} md:p-4 flex-col bg-white h-full}`}>
            <p className="font-bold uppercase">Summary</p>
            {cartItems.map((item, index) => (
                <CartItem key={index} item={item} />
            ))}
            {summaryItems.map((item, index) => (
                <SummaryItem key={index} title={item.title} amount={item.amount} />
            ))}
            <button type="submit" className="bg-orange text-white font-bold my-2 py-2 uppercase">Continue to Pay</button>
        </div>
    );
}

export default CartSummary;