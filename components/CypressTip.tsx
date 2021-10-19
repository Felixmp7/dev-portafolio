import { useRouter } from 'next/router';
import { useState } from 'react';
import Tip from './utils/Tip';

const theme = {
    textColor: 'text-green-600',
    borderColor: 'border-green-600',
    bg: 'bg-green-600',
    buttonColor: 'green',
};

const CypressTip = (): JSX.Element => {
    const router = useRouter();
    const isEnglishLanguage = router.locale === 'en';
    const [isShowTip, setIsShowTip] = useState(false);
    const opacityTransition = isShowTip ? 'opacity-1' : 'opacity-0';
    const tipPosition = isShowTip ? 'static' : 'absolute';

    return (
        <Tip
            title={isEnglishLanguage ? 'For UT' : 'Para UT'}
            theme={theme}
            colorTitle={isEnglishLanguage ? 'I use' : 'utilicé'}
            isShowTip={isShowTip}
            slug="cypress-tip"
            setIsShowTip={setIsShowTip}
        >
            <div className={`cypressTipContainer transition-all duration-700 ease ${tipPosition} ${opacityTransition}`}>
                <div className="flex flex-col items-center my-5 mobileLg:my-0 mobileLg:mr-10">
                    <img
                        src="/assets/icons/cypress.svg"
                        alt="Cypress"
                        width="80px"
                        height="80px"
                        className="mb-4"
                    />
                    <span className="pl-1 text-lg rounded-md">
                        tests
                        <span className="px-1 ml-1 bg-green-600 rounded">passing</span>
                    </span>
                </div>
                <p className="text-center mobileLg:text-left">
                    <a href="https://www.cypress.io/" className="font-bold text-orange hover:underline">Cypress</a>
                    {isEnglishLanguage
                        ? ', a framework "all in one" that includes asserts, mocks libraries, and e2e automatic tests'
                        : ', un framework “todo en uno” que incluye librerías de aserciones, de mocks y pruebas e2e automáticas.'}
                </p>
            </div>
        </Tip>
    );
};

export default CypressTip;
