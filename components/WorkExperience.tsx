import { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { IWork } from 'types';
import JobDetails from './widgets/JobDetails';

const Experience: FC<IWork> = ({
    enterpriseIcon,
    regionIcon,
    duration,
    jobTitle,
    slug,
    description,
    theme: { borderColor, bgColor },
    descriptionTranslated,
}) => {
    const { locale } = useRouter();
    const inEnglish = locale === 'en';

    return (
        <div className={`flex flex-col items-center justify-between laptopXl:flex-row px-5 w-full py-10 my-5 border-b-2 border-l-2 rounded border-opacity-80 ${borderColor}`}>
            <div className="flex flex-col">
                <div className="relative h-24 w-52">
                    <Image
                        src={enterpriseIcon}
                        alt={`${slug} logo`}
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <Link href="/">
                    <a className={`self-center px-4 py-2 mt-6 bg-opacity-30 border rounded-full hover:bg-opacity-100 ease duration-500 transition-all ${borderColor} ${bgColor}`}>
                        {inEnglish ? 'See projects' : 'Ver proyectos'}
                    </a>
                </Link>
            </div>
            <div className="w-3/4 mx-auto">
                <JobDetails
                    title={inEnglish ? 'Enterprise Description' : 'Descripción de la empresa'}
                    detail={inEnglish ? descriptionTranslated || description : description}
                />
                <div className="flex flex-col w-full mx-auto mt-5 tablet:flex-row laptopLg:items-center tablet:justify-evenly">
                    <JobDetails title={inEnglish ? 'Location' : 'Ubicación'} icon={regionIcon} />
                    <JobDetails title={inEnglish ? 'Period' : 'Periodo'} detail={duration} detailColor="text-green-400" />
                    <JobDetails title={inEnglish ? 'Charge' : 'Cargo'} detail={jobTitle} detailColor="text-blue-400" />
                </div>
            </div>
        </div>
    );
};

export default Experience;
