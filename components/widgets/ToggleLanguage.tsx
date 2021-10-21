import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ToggleLanguage = (): JSX.Element => {
    const { locale, pathname } = useRouter();
    const isEnglishLanguage = locale === 'en';
    const activeClasses = 'text-gray-600 font-semibold bg-white';

    return (
        <div className="text-xs">
            <Link href={pathname} locale="en">
                <a className={`toggleLangugage ease mr-1 ${isEnglishLanguage && activeClasses}`}>EN</a>
            </Link>
            <Link href={pathname} locale="es">
                <a className={`toggleLangugage ease ${!isEnglishLanguage && activeClasses}`}>ES</a>
            </Link>
        </div>
    );
};

export default ToggleLanguage;
