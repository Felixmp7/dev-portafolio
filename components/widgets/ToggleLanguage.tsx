/* eslint-disable @next/next/link-passhref */
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ToggleLanguage = (): JSX.Element => {
    const router = useRouter();
    const isEnglishLanguage = router.locale === 'en';
    const activeClasses = 'text-gray-600 font-semibold bg-white';

    return (
        <div className="text-xs">
            <Link href="/" locale="en">
                <span className={`toggleLangugage ease mr-1 ${isEnglishLanguage && activeClasses}`}>
                    EN
                </span>
            </Link>
            <Link href="/" locale="es">
                <span className={`toggleLangugage ease ${!isEnglishLanguage && activeClasses}`}>
                    ES
                </span>
            </Link>
        </div>
    );
};

export default ToggleLanguage;
