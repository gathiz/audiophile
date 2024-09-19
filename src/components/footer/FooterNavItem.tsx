import { NavLink } from "react-router-dom";

interface NavItemProps {
    title: string;
    path: string;
}

const FooterNavItem: React.FC<NavItemProps> = ({ title, path }) => {
    return (
        <NavLink
            to={path}
            className="w-1/2 text-white uppercase m-4 p-4 font-bold text-sm hover:text-light-orange focus:text-light-orange"
        >
            {title}
        </NavLink>
    );
}

export default FooterNavItem;