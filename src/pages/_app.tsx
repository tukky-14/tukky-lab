import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';

import Container from '../components/Container';
import { ProvideAuth } from '../hooks/useAuth';

import type { AppProps } from 'next/app';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Tukky Lab</title>
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
