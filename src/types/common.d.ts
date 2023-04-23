export type ReactChildren = {
    children?: React.ReactNode;
};

export type ExpandProps = {
    title: string;
    children?: React.ReactNode;
};

export type LoadingProps = {
    open: boolean;
};

export type MainContentsProps = {
    title: string;
    children?: React.ReactNode;
};

export type SidebarProps = {
    title: string;
    icon: any;
    link: string;
};
