import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useTranslation } from 'next-i18next';
import useIsSmallScreen from '../hooks/useIsSmallScreen';
import Logo from './Logo';

interface BannerObject {
    welcome: string,
    portfolio: string,
    head: string,
    yellowText: string,
    greenText: string,
    description: string,
    getStartedButton: string
}

const PrincipalBanner = (): JSX.Element => {
    const [isLoaded, setIsLoaded] = useState(false);
    const isSmallScreen: boolean = useIsSmallScreen();
    const { t, i18n } = useTranslation('common');
    const isEnglishLanguage: boolean = i18n.language === 'en';
    const translate: BannerObject = t('principalBanner', { returnObjects: true });
    const offset: number = isSmallScreen ? 0 : -100;
    const lefToCenterTransition: string = isLoaded ? 'left toCenter' : 'left';
    const opacityTransition: string = isLoaded ? 'opacity-1' : 'opacity-0';
    const rightToCenterTransition: string = isLoaded ? 'right toCenter' : 'right';
    const bottomToCenter: string = isLoaded ? 'bottom toCenter' : 'bottom';

    useEffect(() => setIsLoaded(true), []);

    return (
        <section id="principal-banner" className="w-full pt-24 mx-auto transition-all duration-1000 delay-1000 ease tablet:mt-10 containerXl">
            <div className="absolute top-0 left-0 mt-2 ml-2 tablet:hidden">
                <Logo />
            </div>
            <div
                className={`flex flex-col items-center justify-between w-5/6 mx-auto laptop:flex-row relative ${lefToCenterTransition}`}
            >
                <div className="w-32 h-32 overflow-hidden border-4 border-gray-300 rounded-full tablet:w-64 tablet:h-64">
                    <img
                        src="/assets/yo.jpg"
                        alt="Felix Pacheco"
                        width="100%"
                        height="100%"
                    />
                </div>
                <h1 className="mt-4 text-4xl leading-none text-center laptop:text-right tablet:text-10xl">
                    {translate.welcome}
                    {' '}
                    <br className="hidden tablet:block" />
                    <span className="text-custom-purple">
                        {translate.portfolio}
                    </span>
                    !
                </h1>
            </div>
            <div className="w-5/6 mx-auto mt-10 text-lg text-center tablet:text-3xl">
                <p className={`relative ${rightToCenterTransition}`}>
                    {translate.head}
                    {' '}
                    <span className="font-semibold text-custom-yellow">
                        {translate.yellowText}
                    </span>
                    {` ${isEnglishLanguage ? 'and' : 'y'} `}
                    <span className="font-semibold text-green-500">
                        {translate.greenText}
                    </span>
                    {` ${isEnglishLanguage ? 'with' : 'con'}`}
                    <span className="font-semibold text-react"> React JS.</span>
                </p>
                <div
                    className={`transition-all duration-6000 ease-out relative flex mx-auto my-5 tablet:w-1/2 text-5xl tablet:text-10xl justify-evenly ${opacityTransition}`}
                >
                    <i aria-hidden className="fas fa-user-graduate text-custom-yellow" />
                    <i aria-hidden className="text-green-600 fas fa-code" />
                    <i aria-hidden className="fab fa-react text-react" />
                </div>
                <p className={`relative ${bottomToCenter}`}>
                    {`${translate.description}!`}
                </p>
                <div className={`flex flex-col items-center w-32 mx-auto mt-10 transition duration-3000 ease-in-out ${opacityTransition}`}>
                    <ScrollLink activeClass="active" to="training" spy smooth duration={800} offset={offset} className="w-full">
                        <span className="block button pink">
                            {translate.getStartedButton}
                        </span>
                    </ScrollLink>
                    <i aria-hidden className="mt-4 text-pink-700 animate-pulse fas fa-angle-double-down" />
                </div>
            </div>
        </section>
    );
};

export default PrincipalBanner;
