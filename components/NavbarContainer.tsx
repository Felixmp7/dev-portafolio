import useIsSmallScreen from 'hooks/useIsSmallScreen';
import Navbar from './Navbar';
import NavbarMobile from './NavbarMobile';

const navbarItems = [
    {
        id: 1,
        title: 'Inicio',
        titleTranslated: 'Home',
        link: '/',
        icon: 'fas fa-home',
        textColor: 'text-custom-yellow',
    },
    {
        id: 2,
        title: 'Trabajo',
        titleTranslated: 'Work',
        link: '/works',
        icon: 'fas fa-code',
        textColor: 'text-custom-yellow',
    },
    {
        id: 3,
        title: 'Habilidades',
        titleTranslated: 'Skills',
        link: '/skills',
        icon: 'fas fa-toolbox',
        textColor: 'text-pink-700',
    },
    {
        id: 4,
        title: 'Acerca de',
        titleTranslated: 'About me',
        link: '/about',
        icon: 'fas fa-user',
        textColor: 'text-custom-purple',
    },
    // {
    //     id: 5,
    //     title: 'Contacto',
    //     titleTranslated: 'Contact',
    //     link: '/contact',
    //     icon: 'fas fa-envelope',
    //     textColor: 'text-custom-purple',
    // },
];

const NavbarContainer = (): JSX.Element => {
    const breakpoint = 680;
    const isSmallScreen = useIsSmallScreen(breakpoint);

    if (isSmallScreen) {
        return <NavbarMobile navbarItems={navbarItems} />;
    }

    return (
        <Navbar navbarItems={navbarItems} />
    );
};

export default NavbarContainer;
