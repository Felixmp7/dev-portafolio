import PageLayout from '@components/PageLayout';
import Welcome from '@components/Welcome';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '@components/Layout';

export const getStaticProps = async ({ locale }: { locale: never }) => ({
    props: {
        ...await serverSideTranslations(locale, ['common']),
    },
});

const Work = (): JSX.Element => (
    <PageLayout extraClasses="h-screen home-bg">
        <Layout>
            <Welcome />
        </Layout>
    </PageLayout>
);

export default Work;
