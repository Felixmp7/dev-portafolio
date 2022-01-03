import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PageLayout from '@layouts/PageLayout';
import Works from '@components/Works';
import Layout from '@layouts/Layout';

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...await serverSideTranslations(locale, ['common']),
    },
});

const Work = () => (
    <PageLayout extraClasses="h-screen work-bg overflow-scroll">
        <Layout>
            <Works />
        </Layout>
    </PageLayout>
);

export default Work;
