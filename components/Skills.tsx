import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import skills from 'static-data/skills.json';
import Title from './widgets/Title';

const Skills = (): JSX.Element => {
    const { t } = useTranslation('common');
    const title = t('skills');

    return (
        <section id="skills" className="pt-40 pb-20">
            <Title title={title} color="text-blue-700" />
            <div className="grid w-full grid-cols-2 gap-5 mt-20 overflow-auto text-2xl mobile:grid-cols-3 tabletLg:gap-10 tabletLg:grid-cols-4">
                {skills.map(({
                    id, icon, name, textColor,
                }) => (
                    <div key={id} className="flex flex-col items-center justify-center">
                        <div className="w-20 h-20 mobile:w-24 mobile:h-24">
                            <Image src={icon} alt={name} width={160} height={160} />
                        </div>
                        <span className={`mt-4 text-sm text-center mobile:text-lg tabletLg:text-xl font-bold ${textColor}`}>{name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
