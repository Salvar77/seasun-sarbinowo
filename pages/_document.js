import { Html, Head, Main, NextScript } from 'next/document';

export default function Document({ locale }) {
	return (
		<Html lang={locale}>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='true'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=Montserrat:wght@400;600&display=swap'
					rel='stylesheet'
				/>

				<meta name='author' content='Kacper Czosnowski' />
				<meta
					name='Description'
					content='NestCore to firma informatyczna, która zajmuje się tworzeniem aplikacji i stron internetowych oraz oferuje kompleksową obsługę informatyczną dla firm. Naszym celem jest zapewnienie klientom nowoczesnych i funkcjonalnych narzędzi, które pomogą w osiągnięciu ich biznesowych celów. Skontaktuj się z nami, aby poznać naszą ofertę!'
				/>
				<meta
					name='keywords'
					content='Usługi informatyczne, pomoc zdalna, tworzenie aplikacji, strony internetowe, oprogramowanie, usługi z drona'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
