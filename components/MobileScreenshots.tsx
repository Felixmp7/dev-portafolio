import Image from 'next/image';

type Props = {
    screenshots: Array<string>;
    alt: string;
}

const MobileScreenshots = ({ screenshots, alt }: Props) => (
    <div className="grid h-screen grid-cols-4 -mt-10 gap-x-5">
        {screenshots.map((image) => (
            <div key={image} className="relative h-full">
                <Image
                    src={image}
                    alt={alt}
                    layout="fill"
                    objectFit="contain"
                />
            </div>
        ))}
    </div>
);

export default MobileScreenshots;
