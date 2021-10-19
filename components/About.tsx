import AboutCard from './AboutCard';
import TitleWithLine from './utils/TitleWithLine';
import histories from './static-data/about.json';
import useIsInView from '../hooks/useIsInView';
import useIsEnglishLanguage from '../hooks/useIsEnglishLanguage';

const theme = {
    textColor: 'text-custom-purple',
    borderColor: 'border-custom-purple',
};

const About = (): JSX.Element => {
    const isEnglishLanguage = useIsEnglishLanguage();
    const { ref, opacityEffect } = useIsInView();

    return (
        <section ref={ref} id="about" className={`w-full mobileContainer mx-auto containerXl ${opacityEffect}`}>
            <TitleWithLine
                text={isEnglishLanguage ? 'About' : 'Acerca'}
                colorText={isEnglishLanguage ? 'me' : 'de mi'}
                theme={theme}
            />
            <div className="grid grid-cols-4 gap-4 mx-auto mt-10 tabletLg:grid-cols-12">
                {histories.map(((history) => (
                    <AboutCard key={history.id} {...history} />
                )))}
            </div>

        </section>
    );
};

export default About;
