import React, { FC, ReactChildren, ReactElement } from 'react';
import Header from '@widgets/Header';
import NavbarContainer from '@components/NavbarContainer';

interface IProps {
    children: ReactChildren | ReactElement;
    extraClasses?: string;
}

const PageLayout: FC<IProps> = ({ children, extraClasses }) => (
    <div className={`relative w-full pb-20 mobileXl:pb-0 ${extraClasses}`}>
        <Header />
        <NavbarContainer />
        {children}
    </div>
);

PageLayout.defaultProps = {
    extraClasses: '',
};

export default PageLayout;
