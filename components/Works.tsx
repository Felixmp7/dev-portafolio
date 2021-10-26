import { useTranslation } from 'next-i18next';
import useWork from '@hooks/useWork';
import WorkExperience from './WorkExperience';
import Title from './widgets/Title';

const Works = (): JSX.Element => {
    const { t } = useTranslation('common');
    const { title } = t('works', { returnObjects: true });
    const { works } = useWork();
    const worksSorted = works.sort((a, b) => b.id - a.id);

    return (
        <section id="works" className="relative flex flex-col items-center justify-center pt-20">
            <Title title={title} color="text-pink-700" />
            {worksSorted.map((work) => (
                <WorkExperience key={work.id} {...work} />
            ))}
        </section>
    );
};

export default Works;
