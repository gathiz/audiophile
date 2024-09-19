import React from "react";

interface CategoryHeadingProps {
    category: string;
}

const CategoryHeading: React.FC<CategoryHeadingProps> = ({category}) => {
    return(
        <div className="flex items-center justify-center bg-hero-black w-full h-[200px]">
            <h1 className="text-4xl font-bold text-white uppercase">{category}</h1>
        </div>
    );
}

export default CategoryHeading;