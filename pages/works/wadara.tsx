import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PageLayout from '@layouts/PageLayout';
import Layout from '@layouts/Layout';
import useWork from '@hooks/useWork';
import ScreenLoader from '@components/widgets/ScreenLoader';
import Experience from '@components/Experience';

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
                <Experience {...job} />
            </Layout>
        </PageLayout>
    );
};

export default Wadara;
