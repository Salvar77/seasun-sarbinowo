import '/styles/globals.scss';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import Footer from '@/components/Footer/Footer';
import Nav from '@/components/Nav/Nav';

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
			<Nav locale={locale} />
			<main>
				<Component {...pageProps} />
			</main>
			<Footer />
		</>
	);
};

export default appWithTranslation(MyApp);
