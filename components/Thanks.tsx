import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const theme = {
    textColor: 'text-white',
    borderColor: 'border-pink-700',
    bg: 'bg-none',
    buttonColor: 'pink',
};

const Thanks = (): JSX.Element => {
    const router = useRouter();
    const isEnglishLanguage = router.locale === 'en';
    const { t } = useTranslation('common');

    return (
        <section
            data-cy="thanks"
            className={`my-16 w-full border-t-4 border-b-4 ${theme.borderColor} ${theme.bg}`}
        >
            <div className="items-center p-5 mx-auto rounded-lg tabletXl:grid tabletXl:grid-cols-2 tabletXl:gap-10 containerXl">
                <div className="relative flex flex-col items-center justify-center mb-2 mobileLg:mb-0">
                    <span className={`text-2xl mobile:text-4xl leading-none tabletXl:text-8xl ${theme.textColor}`}>
                        {isEnglishLanguage ? 'Special' : 'Agradecimiento'}
                        <span
                            className={`text-center text-pink-600 ${isEnglishLanguage ? 'inline' : 'block'}`}
                        >
                            {` ${isEnglishLanguage ? 'thanks to' : 'especial a'}`}
                        </span>
                    </span>
                </div>
                <div className="mt-3 text-xl text-center transition duration-500 ease tabletXl:text-3xl tabletXl:mt-0 tabletXl:text-left">
                    <p>
                        <span className="underline text-custom-purple"> Eliana Guerrero </span>
                        {` ${isEnglishLanguage ? 'and' : 'y'}`}
                        <a href="https://sofiamonroy.com" target="__blank" className="text-yellow-500 underline"> Sofía Monroy </a>
                        {t('thanks')}
                    </p>
                    <div className="flex justify-center mx-auto mt-5 mobileLg:w-1/3">
                        <a href="https://www.adobe.com/la/products/photoshop/free-trial-download.html" target="__blank">
                            <img
                                src="/assets/icons/photoshop.svg"
                                alt="Photoshop"
                                width={75}
                                height={75}
                                className="w-10 h-10 mr-5 tabletXl:w-16 tabletXl:h-16 designIcons"
                            />
                        </a>
                        <a href="https://www.adobe.com/la/products/illustrator.html" target="__blank">
                            <img
                                src="/assets/icons/illustrator.svg"
                                alt="Ilustrator"
                                width={75}
                                height={75}
                                className="w-10 h-10 tabletXl:w-16 tabletXl:h-16 designIcons"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Thanks;
