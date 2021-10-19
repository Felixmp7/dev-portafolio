import React from 'react';

interface DetailProps {
    detail: string;
    value: string;
    theme: {
        textColor: string;
    };
    link?: string;
}

const DetailUp = ({
    detail, value, theme, link,
}: DetailProps): JSX.Element => (
    <div className="flex flex-col py-3">
        <span className={`tablet:text-2xl font-semibold ${theme.textColor}`}>{detail}</span>
        {link ? (
            <a href={link} target="__blank" className="text-base font-medium underline tablet:text-xl">{value}</a>
        )
            : (
                <span className="text-base font-medium tablet:text-xl">{value}</span>
            )}
    </div>
);

DetailUp.defaultProps = {
    link: null,
};

export default DetailUp;
