import { useLocation } from "react-router-dom";
import { selectProduct } from "../../store/productSlice";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import ProductHeader from "../../components/details/ProductHeader";
import Features from "../../components/details/Features";
import Suggestion from "../../components/details/Suggestion";
import GalleryBox from "../../components/details/GalleryBox";

const DetailsOutlet = () => {
    const location = useLocation().pathname;
    const slug = location.replace("/details/", "");
    const product = useSelector((state: RootState) => selectProduct(slug)(state));

    return (
        <div className="md:w-3/4 lg:w-2/3 xl:w-3/4 2xl:w-1/2 mt-8 p-4">
            <ProductHeader product={product!} />
            <Features product={product!} />
            <GalleryBox gallery={product!.gallery}/>
            <Suggestion others={product!.others} />
        </div>
    );
}

export default DetailsOutlet;