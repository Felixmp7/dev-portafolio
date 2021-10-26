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

export interface IWork {
    id: number;
    enterprise: string;
    slug: string;
    enterpriseIcon: string;
    regionIcon: string;
    duration: string;
    jobTitle: string;
    description: string;
    descriptionTranslated: string;
    theme: {
        bgColor: string;
        textColor: string;
        borderColor: string;
        buttonColor: string;
    };
    projects: Array<{
        id: number,
        title: string,
        titleTranslated: string,
        urlWeb?: string,
        screenshots?: Array<string>
        description: string,
        descriptionTranslated: string,
    }>;
}
