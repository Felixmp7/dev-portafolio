import Image from 'next/image';

type Props = {
    title: string;
    detailColor?: string;
    detail?: string;
    icon?: string;
}

const JobDetails = ({
    title, detail, icon, detailColor,
}: Props) => (
    <div className="flex text-lg text-yellow-300">
        <span className="mr-1">
            {`${title} |`}
            {detail && <span className={`ml-1 font-light ${detailColor}`}>{detail}</span>}
        </span>
        {icon && <Image src={icon} alt={detail} width={26} height={24} />}
    </div>
);

JobDetails.defaultProps = {
    detailColor: 'text-white',
    detail: null,
    icon: null,
};

export default JobDetails;
