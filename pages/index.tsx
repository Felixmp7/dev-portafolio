import PageLayout from '@layouts/PageLayout';
import Welcome from '@components/Welcome';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '@layouts/Layout';

export const getStaticProps = async ({ locale }: { locale: never }) => ({
    props: {
        ...await serverSideTranslations(locale, ['common']),
    },
});

const Index = (): JSX.Element => (
    <PageLayout extraClasses="h-screen home-bg">
        <Layout>
            <Welcome />
        </Layout>
    </PageLayout>
);

export default Index;
