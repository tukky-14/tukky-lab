import Head from 'next/head';
import React from 'react';

const CommonHead = () => {
    return (
        <Head>
            <title>Experiment Project</title>
            <meta name="description" content="Experiment Project" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
};

export default CommonHead;
