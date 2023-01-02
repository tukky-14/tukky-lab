import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ProvideAuth } from '.././hooks/use-auth';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ProvideAuth>
            <Component {...pageProps} />
        </ProvideAuth>
    );
}
