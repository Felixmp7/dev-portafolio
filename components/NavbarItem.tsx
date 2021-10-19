import { useRouter } from 'next/router';
import { Link as ScrollLink } from 'react-scroll';
import useIsSmallScreen from '../hooks/useIsSmallScreen';

interface NavItem {
    title: string,
    link: string,
    icon: string,
    titleTranslated: string
}

const NavbarItem = ({
    title, link, icon, titleTranslated,
}: NavItem): JSX.Element => {
    const isSmallScreen = useIsSmallScreen();
    const router = useRouter();
    const isEnglishLanguage = router.locale === 'en';
    const offset = isSmallScreen ? 0 : -100;

    return (
        <ScrollLink data-cy={`navItem-${link}`} activeClass="active" to={link} spy smooth duration={800} offset={offset}>
            <div className="flex flex-col items-center h-full py-1 text-indigo-700 transition duration-500 cursor-pointer ease hover:text-gray-100">
                <span className="text-2xl tablet:hidden">
                    <i aria-hidden className={icon} />
                </span>
                <span className="navbarItem">
                    {isEnglishLanguage ? titleTranslated : title}
                </span>
            </div>
        </ScrollLink>
    );
};

export default NavbarItem;
