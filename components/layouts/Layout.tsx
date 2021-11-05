import React, { FC, ReactChildren, ReactElement } from 'react';

interface IProps {
    children: ReactChildren | ReactElement;
    extraClasses?: string;
}

const Layout: FC<IProps> = ({ children, extraClasses }) => (
    <div className={`w-full mx-auto containerXl ${extraClasses}`}>
        {children}
    </div>
);

Layout.defaultProps = {
    extraClasses: '',
};

export default Layout;
