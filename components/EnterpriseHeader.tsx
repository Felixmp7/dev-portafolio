import Image from 'next/image';
import JobDetailsGrid from './JobDetailsGrid';

type Props = {
    enterpriseIcon: string;
    slug: string;
    regionIcon: string;
    specificDuration: string;
    jobTitle: string;
}

const EnterpriseHeader = ({
    enterpriseIcon,
    slug,
    regionIcon,
    specificDuration,
    jobTitle,
}: Props) => (
    <div className="flex">
        <div className="relative w-52 h-52">
            <Image
                src={enterpriseIcon}
                alt={`${slug} logo`}
                layout="fill"
                objectFit="contain"
            />
        </div>
        <JobDetailsGrid icon={regionIcon} period={specificDuration} charge={jobTitle} />
    </div>
);

export default EnterpriseHeader;
