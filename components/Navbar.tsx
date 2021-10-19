import NavbarItem from './NavbarItem';
import Logo from './utils/Logo';

interface NavItems {
    navbarItems: Array<{
        id: number,
        title: string,
        titleTranslated: string,
        link: string,
        icon: string,
        textColor: string,
    }>,
    isLight: boolean
}

const Navbar = ({ navbarItems, isLight }: NavItems): JSX.Element => {
    const lightClasses = isLight ? 'bg-indigo-1000 border-indigo-700' : 'border-transparent';

    return (
        <header
            data-cy="navbar"
            className={`w-full z-50 transition-all border-b-2 duration-500 ease fixed top-0 px-8 py-2 desktop:px-0 ${lightClasses}`}
        >
            <nav className="flex items-center justify-between h-full mx-auto containerXl">
                <Logo />
                <div className="flex w-2/3 tabletXl:w-auto justify-evenly">
                    {navbarItems.map((item) => (
                        <NavbarItem key={item.id} {...item} />
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
