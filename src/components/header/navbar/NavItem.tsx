import { NavLink } from "react-router-dom";

interface NavItemProps {
    title: string;
    path: string;
}

const NavItem: React.FC<NavItemProps> = ({ title, path }) => {
    return (
        <NavLink
            to={path}
            className="text-white uppercase m-4 p-4 font-bold text-sm hover:text-light-orange focus:text-light-orange"
        >
            {title}
        </NavLink>
    );
}

export default NavItem;