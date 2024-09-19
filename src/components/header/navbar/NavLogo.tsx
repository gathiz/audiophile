import logo from "/logo.svg";

const NavLogo = () => {
    return(
        <div className="flex mx-4 md:mx-1">
            <img className="mx-auto md:mx-1" src={logo}/>
        </div>
    );
}

export default NavLogo;