import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import PageLayout from '@components/PageLayout';
import Layout from '@components/Layout';
import useWork from '@hooks/useWork';
import ScreenLoader from '@components/widgets/ScreenLoader';
import JobDetailsGrid from '@components/JobDetailsGrid';
import ProjectDetails from '@components/ProjectDetails';
import MobileScreenshots from '@components/MobileScreenshots';

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...await serverSideTranslations(locale, ['common']),
    },
});

const slug = 'wadara';

const Wadara = (): JSX.Element => {
    const { getWork } = useWork();
    const job = getWork(slug);

    if (!job) {
        return <ScreenLoader />;
    }

    return (
        <PageLayout extraClasses="h-screen work-bg overflow-scroll">
            <Layout extraClasses="pt-20">
                <>
                    <div className="flex">
                        <div className="relative w-52 h-52">
                            <Image
                                src={job.enterpriseIcon}
                                alt={`${slug} logo`}
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <JobDetailsGrid
                            icon={job.regionIcon}
                            period={job.specificDuration}
                            charge={job.jobTitle}
                        />
                    </div>
                    <ProjectDetails
                        textColor={job.theme.textColor}
                        urlWeb={job.projects[2].urlWeb}
                        projectName={job.projects[2].title}
                        description={job.projects[2].description}
                        technologies={job.projects[2].technologies}
                        slug={slug}
                    />
                    <MobileScreenshots screenshots={job.projects[2].screenshots} alt={slug} />
                </>
            </Layout>
        </PageLayout>
    );
};

export default Wadara;
