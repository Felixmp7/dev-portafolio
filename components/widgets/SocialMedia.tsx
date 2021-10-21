const socialLinks = [
    {
        name: 'Github',
        url: 'https://github.com/Felixmp7',
        icon: 'fab fa-github',
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/felixmp_a/',
        icon: 'fab fa-instagram',
    },
    {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/felix-pacheco-30/',
        icon: 'fab fa-linkedin',
    },
];

type Props = { linkClasses: string; }

const SocialMedia = ({ linkClasses }: Props) : JSX.Element => (
    <>
        {socialLinks.map((link) => (
            <a key={link.name} href={link.url} target="__blank" className={linkClasses}>
                <i aria-hidden className={link.icon} />
            </a>
        ))}
    </>
);

export default SocialMedia;
