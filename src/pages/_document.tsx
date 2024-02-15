import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="ja">
            <Head>
                <link href="/favicon.ico" rel="icon" />
                <meta content="エンジニアつっきーの実験のためのWebアプリケーション" name="description" />
                <meta content="Tukky Lab" property="og:title" />
                <meta content="エンジニアつっきーの実験のためのWebアプリケーション" property="og:description" />
                <meta content="website" property="og:type" />
                <meta content="/tukkylab.png" property="og:image" />
                <meta content="https://tukky-lab.vercel.app/" property="og:url" />
                <meta content="yes" name="apple-mobile-web-app-capable" />
                <meta content="yes" name="mobile-web-app-capable" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
