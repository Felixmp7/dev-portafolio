import React from 'react';
import Head from 'next/head';

const Header = (): JSX.Element => (
    <Head>
        <title>FP | React Developer</title>
        <link rel="icon" href="/assets/logo/indigo.png" />
        <meta
            name="description"
            content="Portafolio oficial de Desarrollador Front-End con React | Felix Pacheco"
        />
        <meta
            name="keywords"
            content="Felix, felix, Felix Pacheco, felix pacheco, pacheco, desarrollador, front-end, react, react native, web developer, developer"
        />
        <meta
            property="og:title"
            content="Felix Pacheco - React Developer"
        />
        <meta
            property="og:description"
            content="Portafolio oficial de Desarrollador Front-End con React | Felix Pacheco"
        />
        <meta property="og:type" content="website" />
        <meta
            property="og:image"
            content="https://portafolios-devfex.vercel.app/assets/logo/indigo.png"
        />
        <meta property="og:locale" content="es_VE" />
    </Head>
);

export default Header;
