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

const Footer = (): JSX.Element => (
    <footer className="w-2/3 h-40 mx-auto mobile:h-48 tablet:w-1/2 tablet:h-32">
        <div className="flex items-center justify-evenly">
            {socialLinks.map((link) => (
                <a key={link.name} href={link.url} target="__blank" className="text-5xl tablet:text-8xl">
                    <i aria-hidden className={`animate-pulse ${link.icon}`} />
                </a>
            ))}
        </div>
        <div className="text-center text-indigo-200 text-opacity-50">
            <i aria-hidden className="mr-2 far fa-copyright" />
            2021 DevFex
        </div>
    </footer>
);

export default Footer;
