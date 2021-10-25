import { Link } from 'react-scroll';
import Image from 'next/image';
import useWork from '@hooks/useWork';

const InlineEnterprises = () => {
    const { getEnterprises } = useWork();

    return (
        <div className="flex items-center justify-center w-full mt-10 ove">
            {getEnterprises().map(({ slug, logo }) => (
                <Link key={slug} to={slug} spy smooth duration={800} offset={0} className="relative h-24 cursor-pointer w-52">
                    <Image src={logo} alt={`${slug} logo`} layout="fill" objectFit="contain" />
                </Link>
            ))}
        </div>
    );
};

export default InlineEnterprises;
