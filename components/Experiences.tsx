import { useRouter } from 'next/router';
import TitleWithLine from './utils/TitleWithLine';
import Experience from './Experience';
import experienceList from './static-data/experience.json';

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
            {experienceList.map((experience) => (
                <Experience key={experience.id} {...experience} />
            ))}
        </section>
    );
};

export default Experiences;
