import '/styles/globals.scss';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import Footer from '@/components/Footer/Footer';
import Nav from '@/components/Nav/Nav';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../public/ga.js'

const MyApp = ({ Component, pageProps }) => {
	const locale = pageProps.locale;
	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = (url) => {
			gtag.pageview(url);
		};

		router.events.on('routeChangeComplete', handleRouteChange);

		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);
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
