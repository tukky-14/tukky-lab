import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
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
                <meta name="description" content="エンジニアつっきーの実験的Webアプリケーション" />
                <meta property="og:title" content="Tukky Lab" />
                <meta property="og:description" content="エンジニアつっきーの実験的Webアプリケーション" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/tukkylab.png" />
                <meta property="og:url" content="https://tukky-lab.vercel.app/" />
            </Head>

            <RecoilRoot>
                <ProvideAuth>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Container>
                            <Component {...pageProps} />
                        </Container>
                    </LocalizationProvider>
                </ProvideAuth>
            </RecoilRoot>
        </>
    );
}
