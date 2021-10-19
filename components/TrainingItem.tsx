import React, { useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

interface TrainingProps {
    title: string,
    duration: string,
    institution: string,
    institutionIcon: string,
    isFaceToFace: boolean,
    image: string,
    theme: {
        textColor: string,
        borderColor: string,
        bgColor: string,
    },
    imageSize: string,
    isSpecial: boolean,
    titleTranslated?: string
}

const KnowledgeItem = ({
    title,
    duration,
    institution,
    institutionIcon,
    isFaceToFace,
    image,
    theme,
    imageSize,
    isSpecial,
    titleTranslated,
}: TrainingProps): JSX.Element => {
    const [isHover, setIsHover] = useState(false);
    const router = useRouter();
    const isEnglishLanguage = router.locale === 'en';
    const scrollCertificate = isHover ? 'scrolled certificate' : 'certificate';
    const icon = isFaceToFace ? 'fas fa-user-graduate' : 'fas fa-globe';
    const background = isSpecial ? theme.bgColor : 'bg-none';

    return (
        <div
            className={`trainingItem transition-all duration-500 ease ${theme.borderColor} ${background}`}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            {image && (
                <img
                    src={image}
                    alt={title}
                    width="100%"
                    height="100%"
                    className={scrollCertificate}
                />
            )}
            <div className="flex items-center justify-center h-20 mb-5">
                <img
                    src={institutionIcon}
                    alt={title}
                    width={imageSize || '50px'}
                    height={imageSize || '50px'}
                />
            </div>
            <span className="text-lg text-center tablet:text-2xl">
                <span className={`block text-2xl tablet:text-3xl ${theme.textColor}`}>{institution}</span>
                <span className="block">{isEnglishLanguage ? titleTranslated || title : title}</span>
                <span className="block font-bold text-react">{duration}</span>
            </span>
            <i aria-hidden className={`absolute top-0 mt-2 ml-2 text-xl text-custom-yellow ${icon}`} />
        </div>
    );
};

KnowledgeItem.propTypes = {
    title: PropTypes.string.isRequired,
    titleTranslated: PropTypes.string.isRequired,
    theme: PropTypes.instanceOf(Object).isRequired,
    duration: PropTypes.string.isRequired,
    institutionIcon: PropTypes.string.isRequired,
    institution: PropTypes.string.isRequired,
    image: PropTypes.string,
    isFaceToFace: PropTypes.bool,
    imageSize: PropTypes.string,
    isSpecial: PropTypes.bool,
};

KnowledgeItem.defaultProps = {
    isFaceToFace: false,
    imageSize: null,
    isSpecial: false,
    image: null,
};

export default KnowledgeItem;
