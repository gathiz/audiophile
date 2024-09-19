import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { selectProduct } from "../../store/productSlice";
import { Link } from "react-router-dom";
import React from "react";

interface CategoryCardProps {
    slug: string;
  }

const CategoryCard: React.FC<CategoryCardProps> = ({slug}) => {
    const product = useSelector((state: RootState) => selectProduct(slug)(state));
    return (
        <div className="flex flex-col text-center p-4 m-4 items-center md:flex-row md:even:flex-row-reverse">
            <div className="flex md:p-4 md:m-4 w-full md:w-1/2">
                <picture className="w-full h-full">
                    <source
                        media="(min-width: 1440px)"
                        srcSet={product?.categoryImage.desktop}
                    />
                    <source
                        media="(min-width: 768px)"
                        srcSet={product?.categoryImage.tablet}
                    />
                    <img
                        src={product?.categoryImage.mobile}
                        alt=""
                        className="w-full h-full"
                    />
                </picture>
            </div>
            <div className="flex flex-col items-center md:items-start justify-center w-full md:w-1/2">
                <h1 className="text-4xl font-bold text-black uppercase my-4">{product?.name}</h1>
                <p className="text-dark-gray md:text-justify my-4">{product?.description}</p>
                <Link to={`/details/${product?.slug}`} className="uppercase bg-orange text-sm text-white tracking-widest my-8 py-4 px-8">See Product</Link>
            </div>
        </div>
    );
}

export default CategoryCard;