import NavItem from "./NavItem";

const NavList = () => {
    const items = [
        {title: "Home", path: "/"},
        {title: "Headphones", path: "/category/headphones"},
        {title: "Speakers", path: "/category/speakers"},
        {title: "Earphones", path: "/category/earphones"},
    ];

    return(
        <div className="flex hidden md:block">
            {items.map((item,index) => (
                <NavItem key={index} title={item.title} path={item.path}/>
            ))}
        </div>
    );
}

export default NavList;