import React from 'react';
import CarouselProjects from './CarouselProjects';
import GridProjects from './GridProjects';
import EzgmzProject from './EzgmzProject';

interface ProjectProps {
    enterprise: string;
    theme: {
        bgColor: string,
        textColor: string,
        borderColor: string,
        buttonColor: string
    };
    projects: Array<{
        id: number,
        title: string,
        titleTranslated: string,
        urlWeb: string,
        description: string,
        descriptionTranslated: string,
        screenshots: Array<string>
    }>;
}

const Projects = ({
    projects, theme, enterprise,
}: ProjectProps): JSX.Element => {
    const handleRenderProjects = () => {
        if (enterprise === 'Ezgmz') {
            return (
                <EzgmzProject
                    project={projects[0]}
                    theme={theme}
                />
            );
        } if (enterprise === 'AnIncubator') {
            return (
                <GridProjects
                    projects={projects}
                    enterprise={enterprise}
                    theme={theme}
                />
            );
        }
        return (
            <CarouselProjects
                projects={projects}
                enterprise={enterprise}
                theme={theme}
            />
        );
    };

    return (
        <div className="mx-auto mt-5 tablet:mt-10 tablet:w-4/5">
            {handleRenderProjects()}
        </div>
    );
};

Projects.defaultProps = {

};

export default Projects;
