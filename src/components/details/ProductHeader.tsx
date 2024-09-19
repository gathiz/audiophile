import React, { useState } from "react";
import { Product } from "../../types";
import QuantityButton from "../header/cart/QuantityButton";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { add } from "../../store/cartSlice";
import { formatCurrency } from "../../util";

interface ProductHeaderProps {
    product: Product;
}

const ProductHeader: React.FC<ProductHeaderProps> = ({ product }) => {
    const [quantity, setQuantity] = useState<number>(1);
    const useAppDispatch = () => useDispatch<AppDispatch>();
    const dispatch = useAppDispatch();

    const productData = {
        slug: product?.slug,
        name: product?.cart.name,
        icon: product?.cart.icon,
        price: product?.price,
        quantity: quantity,
    };

    const handleIncrement = () => {
        setQuantity((prev) => prev + 1);
    }

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    }

    const handleAddCart = () => {
        dispatch(add({ slug: productData.slug, price: productData.price, quantity: quantity }));
    }

    return (
        <div className="flex flex-col w-full md:flex-row">
            <div className="flex items-center justify-center w-full md:w-1/2 md:mr-4">
                <picture className="w-full h-full">
                    <source
                        media="(min-width: 1440px)"
                        srcSet={product?.image.desktop}
                    />
                    <source
                        media="(min-width: 768px)"
                        srcSet={product?.image.tablet}
                    />
                    <img
                        src={product?.image.mobile}
                        alt=""
                        className="w-full h-full"
                    />
                </picture>
            </div>
            <div className="flex flex-col items-start justify-center w-full md:w-1/2 md:mx-4">
                {product.new ? <p className="text-orange uppercase tracking-[0.8rem] my-4">New Product</p>: null}
                <h1 className="text-4xl font-bold tracking-widest text-black uppercase mt-4">{product.name}</h1>
                <p className="text-dark-gray text-justify mt-4">{product.description}</p>
                <p className="font-bold mt-8">{formatCurrency(product.price)}</p>
                <div className="flex mt-8">
                    <QuantityButton
                        onIncrementClick={handleIncrement}
                        onDecrementClick={handleDecrement}
                        quantity={quantity} />
                    <button
                        onClick={handleAddCart}
                        className="uppercase text-white font-bold bg-orange text-sm mx-4 h-12 px-4 tracking-widest">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductHeader;