import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import Container from '../components/Container';
import { ProvideAuth } from '../hooks/useAuth';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Tukky Lab</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <RecoilRoot>
                <ProvideAuth>
                    <Container>
                        <Component {...pageProps} />
                    </Container>
                </ProvideAuth>
            </RecoilRoot>
        </>
    );
}
