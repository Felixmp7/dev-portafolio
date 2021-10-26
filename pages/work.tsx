import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PageLayout from '@components/PageLayout';
import Works from '@components/Works';
import Layout from '@components/Layout';

export const getStaticProps = async ({ locale }: { locale: never }) => ({
    props: {
        ...await serverSideTranslations(locale, ['common']),
    },
});

const Work = (): JSX.Element => (
    <PageLayout extraClasses="h-screen work-bg overflow-scroll">
        <Layout>
            <Works />
        </Layout>
    </PageLayout>
);

export default Work;
