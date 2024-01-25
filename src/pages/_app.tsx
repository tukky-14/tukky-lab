import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import Container from '../components/Container';
import { ProvideAuth } from '../hooks/useAuth';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <ProvideAuth>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Container>
                        <Component {...pageProps} />
                    </Container>
                </LocalizationProvider>
            </ProvideAuth>
        </RecoilRoot>
    );
}
