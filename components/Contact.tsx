import { useRouter } from 'next/router';
import TitleWithLine from './widgets/Title';

const theme = {
    textColor: 'text-red-600',
    borderColor: 'border-red-600',
};

const Contact = (): JSX.Element => {
    const router = useRouter();
    const isEnglishLanguage = router.locale === 'en';

    return (
        <section id="contact" className="w-full mx-auto mt-10 mb-12 tablet:text-2xl mobileContainer containerXl">
            <TitleWithLine
                text={isEnglishLanguage ? 'Contact' : 'Envíame'}
                colorText={isEnglishLanguage ? 'me' : 'un email'}
                theme={theme}
            />
            <div className="mt-4">
                <p>
                    {isEnglishLanguage
                        ? 'For the moment you\'ll can send me an email clicking here: '
                        : 'Por el momento puedes enviarme un email haciendo click aquí: '}
                    <a
                        className="inline-flex items-center text-red-500 hover:underline"
                        href="mailto:devfex.19@gmail.com?subject=He revisado tu portafolio!&body=Hola, Felix!"
                    >
                        {isEnglishLanguage ? 'Send Email' : 'Enviar Email'}
                        <i aria-hidden className="pl-2 fas fa-paper-plane" />
                    </a>
                </p>
            </div>
        </section>
    );
};

export default Contact;
