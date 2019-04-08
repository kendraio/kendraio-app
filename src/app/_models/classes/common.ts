export interface BreadCrumb {
    label: string;
    url: string;
}

export interface RouteData {
pageTitle?: string;
pageSubTitle?: string;
icon?: string;
breadcrumb?: string
}

export interface MenuItem {
    label: string;
    path?: string;
    parentLabel?: String;
    icon: string;
    hasChildren?: boolean;
    disabled?: boolean;
    children?: MenuItem[];
}
