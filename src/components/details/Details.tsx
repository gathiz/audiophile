import { Outlet } from "react-router-dom";
import BackButton from "./BackButton";
import CategoryRow from "../hero/Category/CategoryRow";
import Banner from "../hero/feature/Banner";

const Details = () => {

    return (
        <main className="mt-[20px] flex flex-col items-center w-full h-full overflow-auto">
            <BackButton/>
            <Outlet/>
            <CategoryRow/>
            <Banner/>
        </main>
    );
}

export default Details;