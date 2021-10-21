import Image from 'next/image';
import logo from 'public/assets/logo/indigo.png';
import ToggleLanguage from '@widgets/ToggleLanguage';

const Logo = (): JSX.Element => (
    <div className="flex items-end">
        <Image src={logo} alt="logo" width={60} height={60} />
        <div className="ml-2 text-left">
            <h1 className="mb-1 text-xl font-light text-white">React Developer</h1>
            <ToggleLanguage />
        </div>
    </div>
);

export default Logo;
