import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ProvideAuth } from '.././hooks/use-auth';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
    <Head>
        <title>Experiment Project</title>
        <meta name="description" content="Experiment Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>;

    return (
        <ProvideAuth>
            <Component {...pageProps} />
        </ProvideAuth>
    );
}
