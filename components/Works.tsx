import { useTranslation } from 'next-i18next';

const Works = (): JSX.Element => {
    const { t } = useTranslation('common');
    const { title, description } = t('works', { returnObjects: true });

    return (
        <div className="relative flex items-center justify-center h-screen">
            <div className="text-center">
                <h1 className="text-4xl font-medium mobileMd:text-8xl mobileXl:text-10xl">{title}</h1>
                <span className="font-light text-white mobileMd:text-lg text-opacity-90">{description}</span>
            </div>
            <div className="absolute hidden text-center text-indigo-200 text-opacity-50 mobileMd:block bottom-10">
                <i aria-hidden className="mr-2 far fa-copyright" />
                2021 DevFex
            </div>
        </div>
    );
};

export default Works;
