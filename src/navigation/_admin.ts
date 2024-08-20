import brand from "../assets/react.svg";
import brandMini from "../assets/react.svg";
import {DashboardIcon, OrderIcon, PatientIcon, RDVIcon} from "../components/Icon/IconFile";
import {BaseNavItem, Brand, NavGroupItem, Profile} from "../components/Sidebar/types";

export const _nav: (BaseNavItem | NavGroupItem)[] = [
    {
        type: 'NavItem',
        title: "RENDEZ-VOUS",
        name: "Dashboard",
        path: "/admin/dashboard",
        icon: DashboardIcon
    },
    {
        type: 'NavItem',
        name: "Demande",
        path: "/admin/demande",
        icon: OrderIcon
    },
    {
        type: 'NavItem',
        name: "Rendez-vous",
        path: "/admin/rdv",
        icon: RDVIcon
    },
    {
        type: 'NavItem',
        name: "Patient",
        path: "/admin/patient",
        icon: PatientIcon
    },
];

export const _brand: Brand = {
    name: "Brand Name",
    logo: brand,
    logo_mini: brandMini
};

export const _profile: Profile = {
    name: "Administrateur"
};
