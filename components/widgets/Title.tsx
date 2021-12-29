type Props = {
    title?: string | string[];
    description?: string;
    color?: string;
    className?: string
}

const Title = ({
    title, description, color, className,
}: Props): JSX.Element => (
    <div className={`text-center ${className}`}>
        <h2 className={`text-4xl font-medium mobileMd:text-8xl mobileXl:text-10xl ${color}`}>{title}</h2>
        {description && <span className="font-light text-white mobileMd:text-lg text-opacity-90">{description}</span>}
    </div>
);

Title.defaultProps = {
    title: 'Título',
    description: undefined,
    color: 'text-white',
    className: '',
};

export default Title;
