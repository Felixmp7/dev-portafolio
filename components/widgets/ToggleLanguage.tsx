import React from 'react';
import Link from 'next/link';

type Props = {
    locale: string | undefined;
    pathname: string;
}

const ToggleLanguage = ({ locale, pathname }: Props): JSX.Element => {
    const isEnglishLanguage = locale === 'en';
    const activeClasses = 'text-gray-600 font-semibold bg-white';

    return (
        <div className="text-xs">
            <Link href={pathname || '/'} locale="en">
                <a className={`toggleLangugage ease mr-1 ${isEnglishLanguage && activeClasses}`}>EN</a>
            </Link>
            <Link href={pathname || '/'} locale="es">
                <a className={`toggleLangugage ease ${!isEnglishLanguage && activeClasses}`}>ES</a>
            </Link>
        </div>
    );
};

export default ToggleLanguage;
