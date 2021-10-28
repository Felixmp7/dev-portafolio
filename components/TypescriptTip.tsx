import { useRouter } from 'next/router';
import { useState } from 'react';
import Tip from './widgets/Tip';

const theme = {
    textColor: 'text-blue-500',
    borderColor: 'border-blue-500',
    bg: 'bg-blue-500',
    buttonColor: 'blue',
};

const TypescriptTip = (): JSX.Element => {
    const router = useRouter();
    const isEnglishLanguage = router.locale === 'en';
    const [isShowTip, setIsShowTip] = useState(false);
    const opacityTransition = isShowTip ? 'opacity-1' : 'opacity-0';
    const tipPosition = isShowTip ? 'static' : 'absolute';

    return (
        <Tip
            title={isEnglishLanguage ? 'This Portfolio' : 'El Portafolio'}
            slug="javascript-tip"
            theme={theme}
            colorTitle={isEnglishLanguage ? 'initially' : 'inicialmente'}
            isShowTip={isShowTip}
            setIsShowTip={setIsShowTip}
        >
            <div className={`mobile:text-xl transition-all duration-700 ease tablet:static tablet:text-3xl ${tipPosition} ${opacityTransition}`}>
                <div className="flex items-center justify-center mt-2 mobileLg:justify-start mobileLg:mt-0">
                    <p>
                        {isEnglishLanguage ? 'It was written to' : 'Fue escrito en'}
                        <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" className="font-bold text-custom-yellow hover:underline"> Javascript</a>
                    </p>
                    <img
                        src="/assets/icons/javascript.png"
                        alt="Javascript"
                        width="50px"
                        height="50px"
                        className="w-5 ml-2 mobileLg:w-10"
                    />
                </div>
                <div className="flex items-center justify-center mt-1 mobileLg:justify-start mobileLg:mt-0">
                    <p>
                        {isEnglishLanguage ? 'It was migrated to' : 'Se migró'}
                        <a href="https://www.typescriptlang.org/" className="font-bold text-blue-500 hover:underline"> Typescript</a>
                    </p>
                    <img
                        src="/assets/icons/typescript.svg"
                        alt="Typescript"
                        width="50px"
                        height="50px"
                        className="w-5 ml-2 mobileLg:w-10"
                    />
                </div>
            </div>
        </Tip>
    );
};

export default TypescriptTip;
