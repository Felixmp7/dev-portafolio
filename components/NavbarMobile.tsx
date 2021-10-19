import NavbarItem from './NavbarItem';

interface NavItems {
    navbarItems: Array<{
        id: number,
        title: string,
        titleTranslated: string,
        link: string,
        icon: string,
        textColor: string,
    }>
}

const NavbarMobile = ({ navbarItems }: NavItems): JSX.Element => (
    <header
        data-cy="mobileNavbar"
        className="fixed bottom-0 z-50 grid w-full grid-cols-5 gap-0 border-t-2 border-indigo-700 bg-indigo-1000"
    >
        {navbarItems.map((item) => (
            <NavbarItem key={item.id} {...item} />
        ))}
    </header>
);

export default NavbarMobile;
