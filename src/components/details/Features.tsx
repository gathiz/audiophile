import { Product } from "../../types";
import BoxItem from "./BoxItem.tsx";
import React from "react";

interface FeaturesProps {
    product: Product;
}

const Features: React.FC<FeaturesProps> = ({product}) => {
    return(
        <div className="flex flex-col text-gray-600 md:flex-row items-start justify-start">
            <div className="flex flex-col w-full md:w-1/2 items-start mt-8 pr-4 mr-4">
                <h1 className="text-4xl font-bold uppercase tracking-widest mt-4">Features</h1>
                <p className=" text-justify mt-4 py-4">{product.featuresOne}</p>
                <p className="text-justify">{product.featuresTwo}</p>
            </div>
            <div className="flex flex-col w-full md:w-1/2 items-start mt-8 px-4">
                <h1 className="text-4xl font-bold uppercase mt-4 tracking-widest">In the box</h1>
                {product.includes.map((item,index) => (
                    <BoxItem key={index} quantity={item.quantity} title={item.item}/>
                ))}
            </div>
        </div>
    )

}

export default Features;