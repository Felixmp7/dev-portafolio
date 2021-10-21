import { useRouter } from 'next/router';
import Link from 'next/link';

type Props = {
    title: string,
    link: string,
    icon: string,
    titleTranslated: string
};

const NavbarItem = ({
    title, icon, link, titleTranslated,
}: Props): JSX.Element => {
    const { locale, pathname } = useRouter();
    const isEnglishLanguage = locale === 'en';
    const isActive = pathname === link;

    return (
        <Link href={link}>
            <a className={`flex flex-col items-center h-full py-1 transition duration-500 cursor-pointer ease hover:text-pink-700 ${isActive ? 'text-pink-700' : 'text-gray-100'}`}>
                <span className="text-lg mobileXl:hidden"><i aria-hidden className={icon} /></span>
                <span className="hidden px-4 text-sm text-left mobile:block mobileXl:text-base">
                    {isEnglishLanguage ? titleTranslated : title}
                </span>
            </a>
        </Link>
    );
};

export default NavbarItem;
