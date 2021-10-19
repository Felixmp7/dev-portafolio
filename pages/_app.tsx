import React from 'react';
import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import '../tailwind.css';

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default appWithTranslation(App);
