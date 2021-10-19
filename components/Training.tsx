import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import TitleWithLine from './utils/TitleWithLine';
import TrainingItem from './TrainingItem';
import trainingList from './static-data/training.json';

interface translateObject {
    text: string,
    colorText: string,
}

const theme = {
    textColor: 'text-react',
    borderColor: 'border-react',
};

const Training = (): JSX.Element => {
    const [isShowFirstData, setIsShowFirstData] = useState(true);
    const { t } = useTranslation('common');
    const translate: translateObject = t('training', { returnObjects: true });
    const firstData = trainingList.slice(0, 6);
    const data = isShowFirstData ? firstData : trainingList;

    return (
        <section
            data-cy="training"
            id="training"
            className="mx-auto mt-10 mobileContainer tablet:mt-32 containerXl"
        >
            <TitleWithLine text={translate.text} colorText={translate.colorText} theme={theme} />
            <div className="w-full my-10 mobileLg:grid mobileLg:grid-cols-2 mobileLg:gap-5 laptopLg:grid-cols-3 laptopLg:gap-10">
                {data.map((item) => (
                    <TrainingItem key={item.id} {...item} />
                ))}
            </div>
            {(!!isShowFirstData) && (
                <div className="w-32 mx-auto">
                    <button
                        type="button"
                        className="button pink"
                        onClick={() => setIsShowFirstData(false)}
                    >
                        {t('showMoreButton')}
                    </button>
                </div>
            )}
        </section>
    );
};

export default Training;
