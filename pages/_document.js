import { Html, Head, Main, NextScript } from "next/document";

export default function Document({ locale }) {
  return (
    <Html lang={locale}>
      <Head>
        {/* Skrypt Cookiebot */}
        <script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid={process.env.COOKIEBOT_SECRET_KEY}
          data-blockingmode="auto"
          type="text/javascript"
          async
        ></script>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=Montserrat:wght@400;600&display=swap"
          rel="stylesheet"
        />

        <meta name="author" content="Kacper Czosnowski" />
        <meta
          name="Description"
          content="Nasze domki letniskowe to idealne miejsce na wakacje. Znajdują się w urokliwej i spokojnej okolicy, zaledwie kilka kroków od pięknej piaszczystej plaży. Oferujemy komfortowe wnętrza z klimatyzacją oraz świeżą pościel i miękkie ręczniki"
        />
        <meta
          name="keywords"
          content="domki letniskowe, wakacje, plaża, komfort, prywatność, parking, WiFi, klimatyzacja, plac zabaw, ogródek z tarasem, monitorowanie, bliskość plaży, Smart TV, rezerwacja"
        />
        <link rel="icon" href="/favicon.ico" />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KZ6X82PQ');
          `,
          }}
        />
        {/* End Google Tag Manager */}
      </Head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KZ6X82PQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
