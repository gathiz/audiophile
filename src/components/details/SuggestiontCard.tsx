import { Link } from "react-router-dom";
import { Other } from "../../types";
import React from "react";

interface SuggestionCardProps {
    item: Other;
}

const SuggestionCard: React.FC<SuggestionCardProps> = ({ item }) => {
    const image = item?.image;

    return (
        <div className="flex flex-col w-full md:w-1/3 md:items-start md:justify-between mt-4">
            <picture>
                <source media="(min-width: 1440px)" srcSet={image?.desktop} />
                <source media="(min-width: 768px)" srcSet={image?.tablet} />
                <img
                    src={image?.mobile}
                    alt=""
                    className="rounded-lg h-[120px] w-full object-cover mb-8 md:mb-10 md:h-[318px]"
                />
            </picture>
            <div className="flex flex-col w-full items-center">
                <h1 className="text-2xl font-bold uppercase my-4 tracking-wide">{item.name}</h1>
                <Link
                    to={`/details/${item.slug}`}
                    className="uppercase text-white font-bold bg-orange text-sm mx-4 h-12 p-4 tracking-widest">
                    See Product
                </Link>
            </div>
        </div>
    );
}

export default SuggestionCard;