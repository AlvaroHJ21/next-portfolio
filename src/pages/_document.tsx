import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en" className='scroll-smooth'>
            <Head>
                <link rel="icon" type="image/svg+xml" href="/icon.svg" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'anonymous'} />
                <link
                    href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;700;900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body className='font-raleway bg-background'>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
