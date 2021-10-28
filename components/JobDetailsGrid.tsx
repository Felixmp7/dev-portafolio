import { useRouter } from 'next/router';
import JobDetails from './widgets/JobDetails';

type Props = {
    icon: string;
    period: string;
    charge: string;
}

const JobDetailsGrid = ({ icon, period, charge }: Props) => {
    const { locale } = useRouter();
    const inEnglish = locale === 'en';

    return (
        <div className="flex flex-col w-full tablet:flex-row laptopLg:items-center tablet:justify-evenly">
            <JobDetails title={inEnglish ? 'Location' : 'Ubicación'} icon={icon} />
            <JobDetails title={inEnglish ? 'Period' : 'Periodo'} detail={period} detailColor="text-green-400" />
            <JobDetails title={inEnglish ? 'Charge' : 'Cargo'} detail={charge} detailColor="text-blue-400" />
        </div>
    );
};

export default JobDetailsGrid;
