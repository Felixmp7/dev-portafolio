import PageLayout from '@layouts/PageLayout';
import About from '@components/About';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '@layouts/Layout';

export const getStaticProps = async ({ locale }: { locale: never }) => ({
    props: {
        ...await serverSideTranslations(locale, ['common']),
    },
});

const AboutPage = () => (
    <PageLayout extraClasses="h-screen work-bg">
        <Layout>
            <About />
        </Layout>
    </PageLayout>
);

export default AboutPage;
