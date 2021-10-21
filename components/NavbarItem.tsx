import { useRouter } from 'next/router';

type Props = {
    title: string,
    // link: string,
    icon: string,
    titleTranslated: string
};

const NavbarItem = ({
    title, icon, titleTranslated,
}: Props): JSX.Element => {
    const router = useRouter();
    const isEnglishLanguage = router.locale === 'en';

    return (
        <div className="flex flex-col items-center h-full py-1 text-gray-100 transition duration-500 cursor-pointer ease hover:text-pink-700">
            <span className="text-lg mobileXl:hidden"><i aria-hidden className={icon} /></span>
            <span className="hidden px-4 text-sm text-left mobile:block mobileXl:text-base">
                {isEnglishLanguage ? titleTranslated : title}
            </span>
        </div>
    );
};

export default NavbarItem;
