import Image from 'next/image';

type Props = {
    screenshots: Array<string> | undefined;
    alt: string;
    isMobile: boolean;
}

const Screenshots = ({ screenshots, alt, isMobile }: Props) => {
    const layoutClasses = isMobile ? 'grid h-screen grid-cols-4 -mt-10 gap-x-5' : 'grid grid-cols-2 gap-6 mt-10 mb-20';
    const height = isMobile ? 'h-full' : 'h-80';

    return (
        <div className={layoutClasses}>
            {screenshots?.length && screenshots.map((image) => (
                <div key={image} className={`relative ${height}`}>
                    <Image
                        src={image}
                        alt={alt}
                        layout="fill"
                        objectFit={isMobile ? 'contain' : 'cover'}
                    />
                </div>
            ))}
        </div>
    );
};

export default Screenshots;
