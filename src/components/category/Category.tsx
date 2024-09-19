import { Outlet } from "react-router-dom";
import CategoryRow from "../hero/Category/CategoryRow";
import Banner from "../hero/feature/Banner";

const Category = () => {
    return(
        <main className="mt-[40px] flex flex-col items-center w-full h-full overflow-auto">
            <Outlet/>
            <CategoryRow/>
            <Banner/>
        </main>
    );
}

export default Category;