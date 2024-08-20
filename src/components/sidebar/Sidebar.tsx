import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./sidebar.css";
import { NavGroup } from "./navgroup/NavGroup";
import Icon from "../Icon/Icon";
import { LeftArrowIcon, RightArrowIcon } from "../Icon/IconFile";
import NavItem from "./navitem/NavItem";
import {BaseNavItem, NavGroupItem, SidebarProps} from "./types";

const Sidebar: React.FC<SidebarProps> = ({ items, brand, profile, handleLogout }) => {
    const location = useLocation();
    const [active, setActive] = useState(true);

    const isNavGroupItem = (item: BaseNavItem | NavGroupItem): item is NavGroupItem => {
        return (item as NavGroupItem).children !== undefined;
    };

    return (
        <>
            <div className={`sidebar text-sm font-semibold relative ${active ? `active` : ``}`}>
                <div className="logo_content flex items-center sidebar-header">
                    <div className="logo">
                        {active ? (
                            <img src={brand.logo} alt="logo" />
                        ) : (
                            <img src={brand.logo_mini} alt="logo" />
                        )}
                        {active && (
                            <div className="logo_name">
                                {brand.name}
                            </div>
                        )}
                    </div>
                    <div
                        className="absolute -right-4 bg-white rounded-full p-1 flex items-center justify-center cursor-pointer toogle-btn"
                        onClick={() => setActive(!active)}
                    >
                        {active ? <Icon icon={LeftArrowIcon} /> : <Icon icon={RightArrowIcon} />}
                    </div>
                </div>
                <ul className="nav_list">
                    {items.map((item, index) => {
                        return (
                            <div key={index}>
                                {isNavGroupItem(item) ? (
                                    <NavGroup item={item} active={active} location={location} />
                                ) : (
                                    <NavItem item={item} active={active} location={location} />
                                )}
                            </div>
                        );
                    })}
                </ul>
                <div className="profile_content">
                    <div className="profile w-full flex items-center justify-between">
                        {active && (
                            <div className="profile_details">
                                <div className="name_last w-1/2">
                                    <h1>{brand.name}</h1>
                                    <div className="last">{profile.name}</div>
                                </div>
                            </div>
                        )}
                        <div className={`flex items-center justify-center ${active ? '' : 'w-full'}`}>
                            {/* You can add more profile-related content here */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
