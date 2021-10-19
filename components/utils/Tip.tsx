import * as React from 'react';
import { useTranslation } from 'next-i18next';
import useIsInView from '../../hooks/useIsInView';

interface TipProps {
    isShowTip: boolean;
    setIsShowTip: (state:boolean) => void;
    title: string;
    colorTitle: string;
    slug: string;
    theme: {
        textColor: string;
        bg: string;
        borderColor: string;
        buttonColor: string;
    };
    children: React.ReactNode;
}

const Tip = ({
    theme, children, isShowTip, setIsShowTip, title, colorTitle, slug,
}: TipProps): JSX.Element => {
    const { ref, opacityEffect } = useIsInView();
    const { t } = useTranslation('common');

    return (
        <div ref={ref} data-cy={slug} className={`my-16 ${opacityEffect}`}>
            <div className="py-3 mx-auto containerXl">
                <span className={`text-lg mobile:text-xl font-bold px-4 py-2 rounded-full ${theme.textColor}`}>{t('portfolioTipLabel')}</span>
            </div>
            <div className={`w-full border-t-4 border-b-4 ${theme.borderColor} ${theme.bg} bg-opacity-25`}>
                <div className="items-center p-5 mx-auto rounded-lg tablet:grid tablet:grid-cols-2 tablet:gap-10 containerXl">
                    <div className="relative flex flex-col items-center justify-center mb-2 mobileLg:mb-0">
                        <span className={`text-center text-2xl mobile:text-4xl tablet:leading-tight tablet:text-8xl ${theme.textColor}`}>
                            {title}
                            <span className="text-white">{` ${colorTitle}`}</span>
                        </span>
                        <div className={`${isShowTip ? 'hidden' : 'block'} flex items-center justify-center w-32 mt-5 mx-auto`}>
                            <button
                                type="button"
                                className={`button ease ${theme.buttonColor}`}
                                onClick={isShowTip ? null : () => setIsShowTip(true)}
                            >
                                {t('discoverButton')}
                            </button>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Tip;
