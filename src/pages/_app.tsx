import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ProvideAuth } from '../hooks/useAuth';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Experiment Project</title>
                <meta name="description" content="Experiment Project" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ProvideAuth>
                <Component {...pageProps} />
            </ProvideAuth>
        </>
    );
}
