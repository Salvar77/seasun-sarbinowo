import "/styles/globals.scss";
import Head from "next/head";
import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Nav/Nav";
import Script from "next/script";
import { appWithTranslation } from "next-i18next";

const MyApp = ({ Component, pageProps }) => {
  const locale = pageProps.locale;

  return (
    <>
      <Head>
        <title>Sea&Sun Sarbinowo</title>
        <meta
          name="viewport"
          content="width=device-width,height=device-height , initial-scale=1"
        />
        <script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="d0623314-adf7-4eb7-ace5-94bb882f9554"
          type="text/javascript"
        ></script>
      </Head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-11124180359"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
       window.dataLayer = window.dataLayer || [];
	   function gtag(){dataLayer.push(arguments);}
	   gtag('js', new Date());
	 
	   gtag('config', 'AW-11124180359');
        `}
      </Script>
      <Nav locale={locale} />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
};

export default appWithTranslation(MyApp);
