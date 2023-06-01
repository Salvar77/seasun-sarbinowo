import '/styles/globals.scss';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import Footer from '@/components/Footer/Footer';
import Nav from '@/components/Nav/Nav';
import Script from 'next/script';

const MyApp = ({ Component, pageProps }) => {
	const locale = pageProps.locale;

	return (
		<>
			<Head>
				<title>Sea&Sun Sarbinowo</title>
				<meta
					name='viewport'
					content='width=device-width,height=device-height , initial-scale=1'
				/>
			</Head>
			<Script
				async
				src='https://www.googletagmanager.com/gtag/js?id=G-64FJ5CKMYE'
				strategy='afterInteractive'
			/>
			<Script id='google-analytics' strategy='afterInteractive'>
				{`
          window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'G-64FJ5CKMYE', 'auto');
          ga('send', 'pageview');
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
