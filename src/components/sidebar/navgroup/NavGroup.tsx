import React, { useState } from "react";
import Icon from "../../Icon/Icon";
import { DownArrowIcon, InactivePointIcon, RightArrowIcon } from "../../Icon/IconFile";
import {NavGroupProps} from "../types";

export const NavGroup: React.FC<NavGroupProps> = ({ item, active, location }) => {
    const [isDropped, setIsDropped] = useState(false);

    return (
        <>
            {active && item.title && (
                <h6 className="uppercase font-bold my-5 text-xs ml-3 text-gray-600">{item.title}</h6>
            )}
            <li onClick={() => setIsDropped(!isDropped)} className={`${isDropped ? 'bg-gray-50 rounded-xl' : ''}`}>
                <div className={`${location.pathname === item.path ? 'active_link' : ''} link-goup`}>
          <span>
            <Icon icon={item.icon} />
          </span>
                    <span className="links_name">{item.name}</span>
                    <span className="absolute right-0 opacity-50 text-xs">
            {isDropped ? <Icon icon={DownArrowIcon} /> : <Icon icon={RightArrowIcon} />}
          </span>
                </div>
                <span className="tooltype">{item.name}</span>
            </li>
            <div className={`sub-menu ${isDropped ? 'h-auto' : 'h-0'} transition duration-800 ease overflow-hidden`}>
                <ul>
                    {item.children.map((child, index) => (
                        <li key={index}>
                            <div className={`${location.pathname === child.path ? 'active_child' : ''} flex items-center`}>
                                <span><Icon icon={InactivePointIcon} /></span>
                                <span className="links_name">{child.name}</span>
                            </div>
                            <span className="tooltype">{child.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};
