import CategoryItem from "./CategoryItem";

const CategoryRow = () => {
    const items = [
        { icon: "/shared-images/desktop/image-category-thumbnail-headphones.png", title: "Headphones" },
        { icon: "/shared-images/desktop/image-category-thumbnail-speakers.png", title: "Speakers" },
        { icon: "/shared-images/desktop/image-category-thumbnail-earphones.png", title: "Earphones" }
    ]
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-[4.25rem] w-full content-between mt-12 md:mt-16 pt-12 md:w-3/4 lg:w-2/3 xl:w-1/2">
            {items.map((item, index) => (
                <CategoryItem key={index} icon={item.icon} title={item.title} />
            ))}
        </div>
    );
}

export default CategoryRow;