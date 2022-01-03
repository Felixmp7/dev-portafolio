import Image from 'next/image';
import Title from '@widgets/Title';
import me from 'public/assets/about/yo2.jpeg';
import { useTranslation } from 'next-i18next';

const About = () => {
    const { t } = useTranslation('common');
    const {
        title, description, info, downloadCV,
    } = t('about', { returnObjects: true });

    return (
        <section id="about" className="py-10 mobileXl:pt-40 mobileXl:pb-20">
            <Title title={title} color="text-custom-purple" className="mb-5" />
            <div className="flex flex-col items-center grid-flow-col gap-20 mobileXl:grid">
                <Image
                    src={me}
                    alt="Felix Pacheco"
                    width={240}
                    height={240}
                    className="rounded-full"
                />
                <p className="text-sm font-light leading-relaxed mobileXl:text-lg">
                    {description}
                </p>
            </div>
            <div className="grid-cols-2 p-6 mx-auto my-10 border-2 rounded mobileXl:grid mobileXl:w-1/2 gap-x-8 justify-items-center border-custom-purple">
                <div className="flex flex-col">
                    <b className="my-1">
                        {info.nameKey}
                        <span className="ml-1 font-light">{info.name}</span>
                    </b>
                    <b className="my-1">
                        {info.phoneKey}
                        <span className="ml-1 font-light">{info.phone}</span>
                    </b>
                    <b className="my-1">
                        {info.frontendExperienceKey}
                        <span className="ml-1 font-light">{info.frontendExperience}</span>
                    </b>
                </div>
                <div className="flex flex-col">
                    <b className="my-1">
                        {info.ageKey}
                        <span className="ml-1 font-light">{info.age}</span>
                    </b>

                    <b className="my-1">
                        {info.addressKey}
                        <span className="ml-1 font-light">{info.address}</span>
                    </b>
                    <b className="my-1">
                        {info.workModeKey}
                        <span className="ml-1 font-light">{info.workMode}</span>
                    </b>
                </div>
            </div>
            <div className="p-2 mb-4 text-center">
                <a
                    href="/files/portafolio.pdf"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="px-6 py-2 text-sm uppercase transition-all duration-500 border border-white rounded-full cursor-pointer hover:bg-custom-purple hover:border-opacity-0 ease"
                >
                    {downloadCV}
                </a>
            </div>
        </section>
    );
};

export default About;
