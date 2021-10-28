import Image from 'next/image';
import { useRouter } from 'next/router';

type Props = {
    urlWeb: string | undefined;
    projectName: string;
    description: string;
    textColor: string;
    technologies: Array<string> | undefined;
    slug: string;
    logo?: string;
}

const ProjectDetails = ({
    urlWeb,
    projectName,
    textColor,
    description,
    technologies,
    slug,
    logo,
}: Props) => {
    const { locale } = useRouter();
    const inEnglish = locale === 'en';

    return (
        <div className="flex items-center justify-between">
            <div>
                <div className={`text-xl ${textColor}`}>
                    {`${inEnglish ? 'Project:' : 'Proyecto:'}`}
                    <a href={urlWeb} target="__blank" className="ml-2 font-light text-white underline transition-all duration-500 cursor-pointer ease hover:text-blue-400">
                        {projectName}
                    </a>
                </div>
                <div className={`text-xl ${textColor}`}>
                    {`${inEnglish ? 'Project description:' : 'Descripción del proyecto:'}`}
                    <span className="ml-2 font-light text-white">{description}</span>
                </div>
                <div className={`flex items-center text-xl ${textColor}`}>
                    <span className="mr-2">{`${inEnglish ? 'Technologies:' : 'Tecnologías:'}`}</span>
                    {technologies?.length && technologies.map((tec) => (
                        <div key={tec} className="flex mr-2">
                            <Image src={tec} alt={slug} width={20} height={20} />
                        </div>
                    ))}
                </div>
            </div>
            {logo && (
                <Image
                    src={logo}
                    alt="project icon"
                    width={100}
                    height={100}
                    className="rounded-full"
                />
            )}
        </div>
    );
};

ProjectDetails.defaultProps = {
    logo: undefined,
};

export default ProjectDetails;
