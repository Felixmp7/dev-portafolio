import React, { FC, ReactChildren, ReactElement } from 'react';
import Header from '@widgets/Header';

interface IProps {
    children: ReactChildren | ReactElement;
    extraClasses?: string;
}

const PageLayout: FC<IProps> = ({ children, extraClasses }) => (
    <div className={`w-full ${extraClasses}`}>
        <Header />
        {children}
    </div>
);

PageLayout.defaultProps = {
    extraClasses: '',
};

export default PageLayout;
