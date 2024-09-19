import { Link } from "react-router-dom";
import arrowIcon from "/arrow.svg";
import React from "react";

interface CategoryItemProps {
    icon: string;
    title: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ icon, title }) => {
    return (
        <Link to={`/category/${title.toLowerCase()}`} className="flex flex-col items-center bg-gray-100 rounded-lg h-[175px] mx-8 md:ml-0 md:mr-4">
            <img className="-mt-12 w-44" src={icon} alt="product" />
            <p className="font-bold uppercase">{title}</p>
            <div className="flex w-full items-center justify-center">
                <p className="text-sm text-gray-600 uppercase">Shop</p>
                <img className="mx-2" src={arrowIcon} alt="arrow" />
            </div>
        </Link>
    );
}

export default CategoryItem;