import PropTypes from 'prop-types';
import useIsEnglishLanguage from '../hooks/useIsEnglishLanguage';
import DetailUp from './utils/DetailUp';

interface ProjectProps {
    project: {
        id: number,
        title: string,
        titleTranslated: string,
        description: string,
        descriptionTranslated: string,
        urlWeb: string
    },
    theme: {
        bgColor: string,
        textColor: string,
        borderColor: string,
        buttonColor: string
    }
}

const NoScreenshotsProject = ({ project, theme }: ProjectProps): JSX.Element => {
    const isEnglishLanguage = useIsEnglishLanguage();

    return (
        <div className="items-center grid-cols-4 tablet:grid">
            <h3
                className={`col-span-1 text-center text-xl mobileLg:text-3xl tablet:text-left tablet:text-4xl font-semibold ${theme.textColor}`}
            >
                {isEnglishLanguage ? 'Project' : 'Proyecto'}
            </h3>
            <div className="flex flex-col justify-between col-span-3 text-lg text-center tablet:flex-row">
                <DetailUp
                    detail={isEnglishLanguage ? 'Name' : 'Nombre'}
                    value={isEnglishLanguage ? project.titleTranslated : project.title}
                    theme={theme}
                />
                <DetailUp
                    detail="Web"
                    value={isEnglishLanguage ? 'Click Here' : 'Click Aquí'}
                    theme={theme}
                    link={project.urlWeb}
                />
                <DetailUp
                    detail={isEnglishLanguage ? 'Description' : 'Descripción'}
                    value={isEnglishLanguage ? project.descriptionTranslated || project.description : project.description}
                    theme={theme}
                />
            </div>
        </div>
    );
};

NoScreenshotsProject.propTypes = {
    project: PropTypes.instanceOf(Object).isRequired,
    theme: PropTypes.instanceOf(Object).isRequired,
};

export default NoScreenshotsProject;
