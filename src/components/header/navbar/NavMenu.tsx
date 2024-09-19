import { useNavigate } from "react-router-dom";
import React, {useState} from "react";

interface NaMenuProps {
    hidden: boolean;
    onClick: () => void;
}

const NavMenu: React.FC<NaMenuProps> = ({ hidden ,onClick}) => {
    const navigate = useNavigate();
    const [activeIndex,setActiveIndex] = useState(0);

    const items = [
        {title: "Home", path: "/"},
        {title: "Headphones",path: "/category/headphones"},
        {title: "Speakers",path: "/category/speakers"},
        {title: "Earphones", path: "/category/earphones"}
    ];

    const handleClick = (index: number) => {
        setActiveIndex(index);
        navigate(items[index].path);
        onClick();
    }

    return (
        <div className={`absolute ${hidden ? "hidden" : ""} left-0 top-8 mt-4 bg-hero-black text-white`}>
            {items.map((item,index) => (
                <p onClick={() => handleClick(index)} key={index} className={`text-sm ${index === activeIndex ? "bg-orange" : ""} uppercase tracking p-2 m-2`}>{item.title}</p>
            ))}
        </div>
    );
}

export default NavMenu;