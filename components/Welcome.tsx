import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import logo from 'public/assets/logo/gray.png';
import ToggleLanguage from '@widgets/ToggleLanguage';
import { useRouter } from 'next/router';

const Welcome = (): JSX.Element => {
    const { locale, pathname } = useRouter();
    const { t } = useTranslation('common');
    const {
        title, description, leftButton, rightButton,
    } = t('home', { returnObjects: true });

    return (
        <div className="relative flex items-center justify-center h-screen">
            <div className="text-center">
                <div className="w-40 pb-2 mx-auto border-b-2 border-white border-opacity-80">
                    <Image src={logo} alt="logo" width={80} height={80} />
                </div>
                <h1 className="text-4xl font-medium mobileMd:text-8xl mobileXl:text-10xl">{title}</h1>
                <span className="font-light text-white mobileMd:text-lg text-opacity-90">{description}</span>
                <div className="flex flex-col items-center justify-center mx-auto mt-6 mobileMd:flex-row">
                    <Link href="/work">
                        <a className="px-6 py-2 mb-4 text-sm uppercase transition-all duration-500 border border-white rounded-full mobileMd:mb-0 hover:bg-yellow-500 hover:border-opacity-0 ease">
                            {leftButton}
                        </a>
                    </Link>
                    <a href="https://github.com/Felixmp7" target="__blank" className="px-6 py-2 text-sm uppercase transition-all duration-500 border border-white rounded-full mobileMd:ml-4 hover:bg-blue-500 hover:border-opacity-0 ease">
                        {rightButton}
                    </a>
                </div>
                <div className="mt-5 mobileXl:hidden">
                    <ToggleLanguage locale={locale} pathname={pathname} />
                </div>
            </div>
            <div className="absolute hidden text-center text-indigo-200 text-opacity-50 mobileMd:block bottom-10">
                <i aria-hidden className="mr-2 far fa-copyright" />
                2021 DevFex
            </div>
        </div>
    );
};

export default Welcome;
