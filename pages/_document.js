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
					content='Nasze domki letniskowe to idealne miejsce na wakacje. Znajdują się w urokliwej i spokojnej okolicy, zaledwie kilka kroków od pięknej piaszczystej plaży. Oferujemy komfortowe wnętrza z klimatyzacją oraz świeżą pościel i miękkie ręczniki'
				/>
				<meta
					name='keywords'
					content='domki letniskowe, wakacje, plaża, komfort, prywatność, parking, WiFi, klimatyzacja, plac zabaw, ogródek z tarasem, monitorowanie, bliskość plaży, Smart TV, rezerwacja'
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
