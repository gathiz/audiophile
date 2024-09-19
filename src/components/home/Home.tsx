import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import CategoryRow from "../hero/Category/CategoryRow";
import Banner from "../hero/feature/Banner";
import Feature from "../hero/feature/Feature";
import Hero from "../hero/Hero";
import { useEffect } from "react";
import axios from "axios";
import { addProducts } from "../../store/productSlice";

const Home = () => {
    const useAppDispatch = () => useDispatch<AppDispatch>();
    const dispatch = useAppDispatch();

    useEffect(() => {
        axios.get('/data.json').then((response) => {
            dispatch(addProducts(response.data));
        });
    }, [dispatch]);
    
    return (
        <main className="mt-[5.625rem] mb-[6rem] flex flex-col items-center w-full h-full overflow-auto">
            <Hero />
            <CategoryRow />
            <Feature />
            <Banner/>
        </main>
    );
}

export default Home;