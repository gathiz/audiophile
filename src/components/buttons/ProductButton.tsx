import { Link } from "react-router-dom";

interface ProductButtonProps {
    path: string;
    color: string;
}

const ProductButton: React.FC<ProductButtonProps> = ({path,color}) => {
    return(
        <Link
        to={path}
        className={`py-4 px-4 w-max bg-${color}`}
        >

        </Link>
    );
}

export default ProductButton;