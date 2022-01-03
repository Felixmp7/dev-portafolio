import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { IWork } from 'types';
import JobDetails from './widgets/JobDetails';

const Job: FC<IWork> = ({
    enterpriseIcon,
    regionIcon,
    duration,
    jobTitle,
    projects,
    iconName,
    slug,
    theme: { borderColor, bgColor },
}) => {
    const { t } = useTranslation('common');
    const { jobs } = t('works', { returnObjects: true });

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
                {projects?.length ? (
                    <Link href={`/works/${slug}`}>
                        <a className={`self-center px-6 py-2 text-xs uppercase my-6 bg-opacity-80 border rounded-full hover:bg-opacity-100 mobileXl:text-sm ease duration-500 transition-all mobileXl:mb-0 ${borderColor} ${bgColor}`}>
                            {jobs.common.seeProjects}
                        </a>
                    </Link>
                ) : null}
            </div>
            <div className="mx-auto mobileXl:w-3/4">
                <JobDetails
                    title={jobs.common.enterpriseDescription}
                    detail={jobs[slug]}
                />
                <div className="flex flex-col w-full mx-auto mt-5 tablet:flex-row laptopLg:items-center tablet:justify-evenly">
                    <JobDetails
                        iconName={iconName}
                        title={jobs.common.location}
                        icon={regionIcon}
                    />
                    <JobDetails
                        title={jobs.common.period}
                        detail={duration}
                        detailColor="text-green-400"
                    />
                    <JobDetails
                        title={jobs.common.charge}
                        detail={jobTitle}
                        detailColor="text-blue-400"
                    />
                </div>
            </div>
        </div>
    );
};

export default Job;
