import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from '../components/Header';
import NavbarContainer from '../components/NavbarContainer';
import PrincipalBanner from '../components/PrincipalBanner';
import NextTip from '../components/NextTip';
import TypescriptTip from '../components/TypescriptTip';
import CypressTip from '../components/CypressTip';
import Training from '../components/Training';
import Experiences from '../components/Experiences';
import Skills from '../components/Skills';
import About from '../components/About';
import Thanks from '../components/Thanks';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export const getStaticProps = async ({ locale }: { locale: never }) => ({
    props: {
        ...await serverSideTranslations(locale, ['common']),
    },
});

const Index = (): JSX.Element => (
    <>
        <Header />
        <NavbarContainer />
        <PrincipalBanner />
        <Training />
        <NextTip />
        <Experiences />
        <TypescriptTip />
        <Skills />
        <CypressTip />
        <About />
        <Thanks />
        <Contact />
        <Footer />
    </>
);

export default Index;
