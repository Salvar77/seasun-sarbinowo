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
				<Script
					async
					src='https://www.googletagmanager.com/gtag/js?id=G-64FJ5CKMYE'
				></Script>
				<Script>
					window.dataLayer = window.dataLayer || []; function gtag()
					{dataLayer.push(arguments)}
					gtag('js', new Date()); gtag('config', 'G-64FJ5CKMYE');
				</Script>
				<title>Sea&Sun Sarbinowo</title>
				<meta
					name='viewport'
					content='width=device-width,height=device-height , initial-scale=1'
				/>
			</Head>
			<Nav locale={locale} />
			<main>
				<Component {...pageProps} />
			</main>
			<Footer />
		</>
	);
};

export default appWithTranslation(MyApp);
