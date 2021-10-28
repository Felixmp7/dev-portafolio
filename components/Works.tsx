import { useTranslation } from 'next-i18next';
import useWork from '@hooks/useWork';
import Job from './Job';
import Title from './widgets/Title';

const Works = (): JSX.Element => {
    const { t } = useTranslation('common');
    const { title } = t('works', { returnObjects: true });
    const { works } = useWork();
    const jobs = works.sort((a, b) => b.id - a.id);

    return (
        <section id="works" className="relative flex flex-col items-center justify-center">
            <div className="pt-40 pb-20"><Title title={title} color="text-pink-700" /></div>
            {jobs.map((work) => (
                <Job key={work.id} {...work} />
            ))}
        </section>
    );
};

export default Works;
