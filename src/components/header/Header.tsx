import Navbar from "./navbar/Navbar";

const Header = () => {
    return(
        <header className="fixed z-50 flex top-0 left-0 justify-center items-center md:justify-center bg-hero-black w-full h-[5.625rem]">
            <Navbar/>
        </header>
    );
}

export default Header