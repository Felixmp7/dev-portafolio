import { useRouter } from 'next/router';
import TitleWithLine from './widgets/Title';

const theme = {
    textColor: 'text-custom-yellow',
    borderColor: 'border-custom-yellow',
};

const Experiences = (): JSX.Element => {
    const router = useRouter();
    const isEnglishLanguage = router.locale === 'en';
    return (
        <section id="experiences" className="mx-auto mobileContainer containerXl">
            <TitleWithLine
                text={isEnglishLanguage ? 'My' : 'Mi'}
                colorText={isEnglishLanguage ? 'Experience' : 'Experiencia'}
                theme={theme}
            />
        </section>
    );
};

export default Experiences;
