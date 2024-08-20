import React from 'react';
import {Link, Location, useLocation} from "react-router-dom";
import Icon from "../../Icon/Icon";
import {NavItemProps} from "../types";

const NavItem: React.FC<NavItemProps> = ({ item, active }) => {
    const location: Location = useLocation();

    return (
        <>
            {active && item.title && (
                <h6 className="uppercase font-bold my-5 text-xs ml-3 text-gray-600">{item.title}</h6>
            )}
            <li>
                <Link
                    to={item.path}
                    className={`${location.pathname === item.path ? 'active_link' : ''}`}>
                    <span><Icon icon={item.icon} /></span>
                    <span className="links_name">{item.name}</span>
                </Link>
                <span className="tooltype">{item.name}</span>
            </li>
        </>
    );
};

export default NavItem;
