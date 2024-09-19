import NavButton from "./NavButton";
import NavList from "./NavList";
import CartButton from "../cart/CartButton";
import NavLogo from "./NavLogo";
import CartModal from "../cart/CartModal.tsx";
import { useEffect, useState } from "react";
import NavMenu from "./NavMenu";

const Navbar = () => {

    const [state, setState] = useState({
        navVisibility: false,
        cartVisibility: false,
        animateIn: false,
        animateOut: false,
        hideNav: true,
        hideCart: true,
        loading: false,
    });



    useEffect(() => {
        if (!state.cartVisibility) {
            setState(prev => ({
                ...prev,
                navVisibility: false,
                hideNav: true,
            }));
        }
    }, [state.cartVisibility]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setState(prev => ({
                ...prev,
                loading: false,
                animateIn: false,
                animateOut: false,
                hideNav: !prev.navVisibility,
                hideCart: !prev.cartVisibility,
            }));
        }, 400);
        return () => clearTimeout(timer);

    }, [state.navVisibility, state.cartVisibility]);

    const handleHamburgerClick = () => {
        if (state.cartVisibility) handleCartClick();
        setState(prev => ({
            ...prev,
            loading: true,
            navVisibility: !prev.navVisibility,
            hideNav: prev.hideNav ? false : prev.hideNav,
            animateIn: !prev.navVisibility,
            animateOut: prev.navVisibility,
        }));
    };



    const handleCartClick = () => {
        setState(prev => ({
            ...prev,
            loading: true,
            cartVisibility: !prev.cartVisibility,
            hideCart: prev.hideCart ? false : prev.hideCart,
            animateIn: !prev.cartVisibility,
            animateOut: prev.cartVisibility,
        }));
    };

    return (
        <nav className="relative flex items-center justify-between md:flex space-x-4 w-full lg:w-3/4 xl:w-2/3 2xl:w-1/2">
            <NavButton open={!state.hideNav} onClick={handleHamburgerClick} />
            <NavLogo />
            <NavMenu hidden={state.hideNav} onClick={() => handleHamburgerClick()}/>
            <NavList/>
            <CartModal onClick={handleCartClick} hidden={!state.cartVisibility}/>
            <CartButton onClick={handleCartClick} />
        </nav>
    );
}

export default Navbar;