export type homeTranslationProps = {
    title: string,
    description: string,
};

export type NavbarItemsProps = {
    navbarItems: Array<{
        id: number,
        title: string,
        titleTranslated: string,
        link: string,
        icon: string,
        textColor: string,
    }>;
}
