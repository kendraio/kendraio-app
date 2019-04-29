export interface BreadCrumb {
    label: string;
    url: string;
}

export interface RouteData {
pageTitle?: string;
pageSubTitle?: string;
icon?: string;
breadcrumb?: string;
}

export interface MenuItem {
    label: Label;
    path?: string;
    parentLabel?: String;
    icon: string;
    hasChildren?: boolean;
    disabled?: boolean;
    children?: MenuItem[];
}

export interface HelpText {
text: string;
ref: string;
    }

    export interface Message {
        msgObj: any;
        ref?: string;
        text?: string;
        cssClass?: string;
        timer?: number;
        link?: string;
        }

        export interface Label {
            de: string;
            fr: string;
            'en-US': string;
        }

        
