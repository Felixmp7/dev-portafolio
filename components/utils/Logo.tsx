import { version } from '../../package.json';
import ToggleLanguage from '../ToggleLanguage';

const Logo = (): JSX.Element => (
    <div className="relative flex items-center">
        <img src="/assets/logo/indigo.png" alt="logo" width="60px" height="60px" />
        <h1 className={'ml-2 text-xl font-light text-white\''}>
            React Developer
        </h1>
        <div className="absolute right-0 flex items-center" style={{ bottom: -5 }}>
            <span className="mr-3 text-sm text-indigo-500 text-opacity-75">
                {`v-${version}`}
            </span>
            <ToggleLanguage />
        </div>
    </div>
);

export default Logo;
