import { Carousel } from 'react-responsive-carousel';
import useIsEnglishLanguage from '../hooks/useIsEnglishLanguage';
import DetailUp from './utils/DetailUp';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface ExperienceProps {
    projects: Array<{
        id: number,
        title: string,
        titleTranslated: string,
        urlWeb: string,
        description: string,
        descriptionTranslated: string,
        screenshots: Array<string>
    }>,
    theme: {
        bgColor: string,
        textColor: string,
        borderColor: string,
        buttonColor: string
    },
    enterprise: string,
}

const CarouselProjects = ({ projects, theme, enterprise }: ExperienceProps): JSX.Element => {
    const isEnglishLanguage = useIsEnglishLanguage();

    const seeProjects = () => {
        if (isEnglishLanguage) return projects.length > 1 ? 'Projects' : 'Project';
        return projects.length > 1 ? 'Proyectos' : 'Proyecto';
    };

    return (
        <>
            <h3 className={`text-center text-xl mobileLg:text-3xl font-semibold tablet:text-4xl ${theme.textColor}`}>{seeProjects()}</h3>
            {projects.map(({
                id, title, titleTranslated, description, descriptionTranslated, screenshots, urlWeb,
            }) => (
                <div key={id} className={`tablet:grid grid-cols-8 gap-10 border-b-2 py-5 ${theme.borderColor}`}>
                    <div className="flex flex-col justify-center col-span-2 text-lg text-center">
                        <DetailUp
                            detail={isEnglishLanguage ? 'Name' : 'Nombre'}
                            value={isEnglishLanguage ? titleTranslated || title : title}
                            theme={theme}
                        />
                        <DetailUp
                            detail="Web"
                            value={isEnglishLanguage ? 'Click here' : 'Click aquí'}
                            theme={theme}
                            link={urlWeb}
                        />
                        <DetailUp
                            detail={isEnglishLanguage ? 'Description' : 'Descripción'}
                            value={isEnglishLanguage ? descriptionTranslated || description : description}
                            theme={theme}
                        />
                    </div>
                    <div className="w-full col-span-6">
                        <Carousel showThumbs={false} showStatus={false} infiniteLoop transitionTime={1000}>
                            {screenshots?.map((screenshot) => (
                                <img
                                    key={screenshot}
                                    src={`/assets/experience/${enterprise.toLowerCase()}/${screenshot}`}
                                    alt={screenshot}
                                    width="200px"
                                    height="200px"
                                    className="w-full"
                                />
                            ))}
                        </Carousel>
                    </div>
                </div>
            ))}
        </>
    );
};

export default CarouselProjects;
