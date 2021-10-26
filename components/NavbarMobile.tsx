import { NavbarItemsProps } from 'types';
import NavbarItem from './NavbarItem';

const NavbarMobile = ({ navbarItems }: NavbarItemsProps): JSX.Element => (
    <nav className="fixed bottom-0 z-50 grid w-full grid-cols-4 gap-0 bg-black border-t-2 border-black bg-opacity-90 border-opacity-10">
        {navbarItems.map((item) => (
            <NavbarItem key={item.id} {...item} />
        ))}
    </nav>
);

export default NavbarMobile;
