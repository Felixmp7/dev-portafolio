import PageLayout from '@components/PageLayout';
import Skills from '@components/Skills';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '@components/Layout';

export const getStaticProps = async ({ locale }: { locale: never }) => ({
    props: {
        ...await serverSideTranslations(locale, ['common']),
    },
});

const SkillsPage = (): JSX.Element => (
    <PageLayout extraClasses="h-screen work-bg">
        <Layout>
            <Skills />
        </Layout>
    </PageLayout>
);

export default SkillsPage;
