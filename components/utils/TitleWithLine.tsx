interface TitleProps {
    text?: string;
    colorText: string;
    theme: {
        textColor: string;
        borderColor: string;
    }
}

const TitleWithLine = ({ text, colorText, theme }: TitleProps): JSX.Element => (
    <>
        <h2 className="text-3xl font-semibold leading-10 tablet:leading-normal tablet:text-8xl">
            {text}
            <span className={theme.textColor}>{` ${colorText}`}</span>
        </h2>
        <div className={`w-5/6 mobile:w-1/2 border-2 tablet:border-4 tablet:w-1/3 ${theme.borderColor}`} />
    </>
);

TitleWithLine.defaultProps = {
    text: '',
};

export default TitleWithLine;
