import FooterNavItem from "./FooterNavItem";

const FooterNavList = () => {
    const items = [
        {title: "Home", path: "/"},
        {title: "Headphones", path: "/category/headphones"},
        {title: "Speakers", path: "/category/speakers"},
        {title: "Earphones", path: "/category/earphones"},
    ];

    return(
        <div className="flex hidden md:block w-full justify-center md:pl-24 md:mt-8 md:justify-end">
            {items.map((item,index) => (
                <FooterNavItem key={index} title={item.title} path={item.path}/>
            ))}
        </div>
    );
}

export default FooterNavList;