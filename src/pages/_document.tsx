import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth dark">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={"anonymous"}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-white font-raleway dark:bg-background">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
