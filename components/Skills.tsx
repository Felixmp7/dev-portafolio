import { useRouter } from 'next/router';
import TitleWithLine from './widgets/Title';
import skills from './static-data/skills.json';

const theme = {
    textColor: 'text-pink-700',
    borderColor: 'border-pink-700',
};

const Skills = (): JSX.Element => {
    const router = useRouter();
    const isEnglishLanguage = router.locale === 'en';

    return (
        <section id="skills" className="mx-auto mobileContainer containerXl">
            <TitleWithLine
                text={isEnglishLanguage ? 'My' : 'Mis'}
                colorText={isEnglishLanguage ? 'Skills' : 'Habilidades'}
                theme={theme}
            />
            <div className="grid w-full grid-cols-2 gap-5 mt-10 overflow-auto text-2xl mobile:grid-cols-3 tabletLg:gap-10 tabletLg:grid-cols-4 laptopLg:grid-cols-5">
                {skills.map(({
                    id, icon, name, textColor,
                }) => (
                    <div key={id} className="flex flex-col items-center justify-center">
                        <div className="w-20 h-20 mobile:w-24 mobile:h-24 tablet:w-32 tablet:h-32">
                            <img
                                src={icon}
                                alt={name}
                                width="160px"
                                height="160px"
                                className="w-full h-full"
                            />
                        </div>
                        <h3 className={`mt-4 text-sm text-center mobile:text-lg tabletLg:text-xl font-bold ${textColor}`}>{name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
