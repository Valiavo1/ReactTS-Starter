import { ReactElement } from "react";

interface BaseNavItem {
    type: string;
    name: string;
    path: string;
    icon: ReactElement;
    title?: string;
}

interface NavGroupItem extends BaseNavItem {
    children: Array<{
        name: string;
        path: string;
    }>;
}

interface NavItemProps {
    item: BaseNavItem;
    active: boolean;
    location: {
        pathname: string;
    };
}

interface NavGroupProps {
    item: NavGroupItem;
    active: boolean;
    location: {
        pathname: string;
    };
}

interface Brand {
    logo: string;
    logo_mini: string;
    name: string;
}

interface Profile {
    name: string;
}

interface SidebarProps {
    items: (BaseNavItem | NavGroupItem)[];
    brand: Brand;
    profile: Profile;
    handleLogout: () => void;
}

export type { NavItemProps, NavGroupProps, SidebarProps, Profile, Brand, BaseNavItem, NavGroupItem };
