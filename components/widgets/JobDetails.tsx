import Image from 'next/image';

type Props = {
    title: string;
    detailColor?: string;
    detail?: string;
    icon?: string;
    iconName?: string;
}

const JobDetails = ({
    title, detail, icon, detailColor, iconName,
}: Props) => (
    <div className="flex text-sm text-yellow-300 mobileXl:text-lg">
        <span className="mr-1">
            {`${title} |`}
            {detail && <span className={`ml-1 font-light ${detailColor}`}>{detail}</span>}
        </span>
        {icon && <Image title={iconName} src={icon} alt={detail} width={26} height={24} />}
    </div>
);

JobDetails.defaultProps = {
    detailColor: 'text-white',
    detail: null,
    icon: null,
    iconName: undefined,
};

export default JobDetails;
