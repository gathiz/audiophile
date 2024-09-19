import { useLocation } from "react-router-dom";
import CategoryHeading from "../../components/category/CategoryHeading";
import { selectAllProducts } from "../../store/productSlice";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import CategoryContent from "../../components/category/CategoryContent";
import CategoryCard from "../../components/category/CategoryCard";

const CategoryOutlet = () => {
    const location = useLocation().pathname;
    const products = useSelector((state: RootState) => selectAllProducts(state));

    const categoryProducts = products.filter(product => {
        return `/category/${product.category}` === location;
    });

    console.log("Category Products", categoryProducts);

    return (
        <>
            <CategoryHeading category={categoryProducts[0]?.category} />
            <CategoryContent>
                {categoryProducts.map(product => {
                    return <CategoryCard key={product.slug} slug={product.slug} />;
                })}
            </CategoryContent>
        </>
    );
};

export default CategoryOutlet;