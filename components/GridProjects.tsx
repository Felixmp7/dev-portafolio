import PropTypes from 'prop-types';
import useIsEnglishLanguage from '../hooks/useIsEnglishLanguage';
import DetailUp from './utils/DetailUp';

interface GridProps {
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

const GridProjects = ({ projects, theme, enterprise }: GridProps): JSX.Element => {
    const isEnglishLanguage = useIsEnglishLanguage();

    return (
        <>
            <h3
                className={`text-center text-xl mobileLg:text-3xl font-semibold tablet:text-4xl ${theme.textColor}`}
            >
                {isEnglishLanguage ? 'Project' : 'Proyecto'}
            </h3>
            {projects.map(({
                id, title, titleTranslated, description, descriptionTranslated, screenshots, urlWeb,
            }) => (
                <div key={id} className={`tablet:grid grid-cols-8 gap-10 border-b-2 py-5 ${theme.borderColor}`}>
                    <div className="flex flex-col justify-center col-span-2 text-lg text-center tablet:text-left">
                        <DetailUp
                            detail={isEnglishLanguage ? 'Name' : 'Nombre'}
                            value={isEnglishLanguage ? titleTranslated || title : title}
                            theme={theme}
                        />
                        <DetailUp
                            detail="Web"
                            value={isEnglishLanguage ? 'Click Here' : 'Click Aquí'}
                            theme={theme}
                            link={urlWeb}
                        />
                        <DetailUp
                            detail={isEnglishLanguage ? 'Description' : 'Descripción'}
                            value={isEnglishLanguage ? descriptionTranslated || description : description}
                            theme={theme}
                        />
                    </div>
                    <div className="flex flex-wrap justify-between w-full col-span-6">
                        {screenshots?.map((screenshot) => (
                            <img
                                key={screenshot}
                                src={`/assets/experience/${enterprise.toLowerCase()}/${screenshot}`}
                                alt={screenshot}
                                width="170px"
                                height="170px"
                                className="w-full tablet:w-1/5"
                            />
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
};

GridProjects.propTypes = {
    projects: PropTypes.instanceOf(Array).isRequired,
    theme: PropTypes.instanceOf(Object).isRequired,
    enterprise: PropTypes.string.isRequired,
};

export default GridProjects;
