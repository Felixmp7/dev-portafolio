import SocialMedia from '@widgets/SocialMedia';
import { NavbarItemsProps } from 'types';
import { useRouter } from 'next/router';
import NavbarItem from './NavbarItem';
import ToggleLanguage from './widgets/ToggleLanguage';

const Navbar = ({ navbarItems }: NavbarItemsProps): JSX.Element => {
    const { locale, pathname } = useRouter();

    return (
        <header className="fixed top-0 z-50 w-full px-8 py-2 bg-black border-b-2 border-black bg-opacity-90 border-opacity-10 desktop:px-0">
            <nav className="flex items-center justify-between h-full mx-auto containerXl">
                <div className="flex w-auto justify-evenly">
                    {navbarItems.map((item) => (
                        <NavbarItem key={item.id} {...item} />
                    ))}
                </div>
                <div className="flex items-center">
                    <ToggleLanguage locale={locale} pathname={pathname} />
                    <div className="flex ml-2 justify-evenly w-28">
                        <SocialMedia linkClasses="text-xl" />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
