import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="ja">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="エンジニアつっきーの実験のためのWebアプリケーション" />
                <meta property="og:title" content="Tukky Lab" />
                <meta property="og:description" content="エンジニアつっきーの実験のためのWebアプリケーション" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/tukkylab.png" />
                <meta property="og:url" content="https://tukky-lab.vercel.app/" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="mobile-web-app-capable" content="yes" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
