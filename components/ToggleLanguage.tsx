import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ToggleLanguage = (): JSX.Element => {
    const router = useRouter();
    const isEnglishLanguage = router.locale === 'en';

    const englishClassesActive = isEnglishLanguage ? 'text-indigo-700 border-indigo-700 font-semibold' : 'text-white text-opacity-25';

    const spanishClassesActive = !isEnglishLanguage ? 'text-pink-700 border-pink-700 font-semibold' : 'text-white text-opacity-25';

    return (
        <div className="text-xs">
            <Link href="/" locale="en">
                <span
                    className={`changeLanguage active:text-opacity-100 ease mr-1 hover:text-indigo-700 hover:border-indigo-700 ${englishClassesActive}`}
                >
                    EN
                </span>
            </Link>
            <Link href="/" locale="es">
                <span
                    className={`changeLanguage active:text-opacity-100 ease hover:text-pink-700 hover:border-pink-700 ${spanishClassesActive}`}
                >
                    ES
                </span>
            </Link>
        </div>
    );
};

export default ToggleLanguage;
