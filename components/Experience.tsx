import { IWork } from 'types';
import EnterpriseHeader from './EnterpriseHeader';
import ProjectDetails from './ProjectDetails';
import Screenshots from './Screenshots';

const Experience = (job: IWork) => {
    const {
        enterpriseIcon,
        slug,
        regionIcon,
        specificDuration,
        jobTitle,
        projects,
        theme,
    } = job;
    return (
        <>
            <EnterpriseHeader
                enterpriseIcon={enterpriseIcon}
                slug={slug}
                regionIcon={regionIcon}
                specificDuration={specificDuration}
                jobTitle={jobTitle}
            />
            {projects.map((project) => (
                <>
                    <ProjectDetails
                        textColor={theme.textColor}
                        urlWeb={project.urlWeb}
                        projectName={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        slug={slug}
                        logo={project.logo}
                    />
                    <Screenshots screenshots={project.screenshots} alt={slug} isMobile={project.isMobile} />
                </>
            ))}
        </>
    );
};

export default Experience;
