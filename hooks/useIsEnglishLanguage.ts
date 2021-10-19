import { useRouter } from 'next/router';

const useIsEnglishLanguage = (): boolean => {
    const router = useRouter();
    return router.locale === 'en';
};

export default useIsEnglishLanguage;
