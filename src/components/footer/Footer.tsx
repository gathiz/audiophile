import NavLogo from "../header/navbar/NavLogo";
import FooterLinks from "./FooterLinks";
import FooterNavList from "./FooterNavList";

const Footer = () => {
    return (
        <footer className="bg-light-black w-full flex flex-col items-center">
            <div className="flex flex-col md:flex-row items-center justify-between text-white my-8 md:w-3/4 lg:w-2/3 xl:w-3/4 2xl:w-1/2">
                <div className="flex flex-col text-gray-200 w-full md:w-1/2 m-4 p-4 md:m-0 md:p-0">
                    <NavLogo />
                    <p className="m-4 md:mt-8 text-center md:text-start">
                        Audiophile is an all in one stop to fulfill your audio needs.
                        We're a small team of music lovers and sound specialists who
                        are devoted to helping you get the most out of personal audio.
                        Come and visit our demo facility - we\’re open 7 days a week.
                    </p>
                    <p className="text-sm text-center md:text-start mx-4 mt-4">Copyright 2024. All Rights Reserved</p>
                </div>
                <div className="flex flex-col items-center w-full md:items-end md:w-1/2 py-4">
                    <FooterNavList />
                    <FooterLinks/>
                </div>
            </div>
        </footer>
    );
}

export default Footer;