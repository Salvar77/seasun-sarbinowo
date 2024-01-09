import classes from './Opinions.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const Opinions = () => {
	const { t } = useTranslation('common');
	const starIcon = (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='24'
			viewBox='0 -960 960 960'
			width='24'
			style={{ fill: `#f5a623` }}
		>
			<path d='m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z' />
		</svg>
	);
	const settings = {
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		cssEase: 'linear',
		responsive: [
			{
				breakpoint: 1440,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 1224,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 540,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	const opinionList = [
		{
			name: 'Wioletta',
			text: `Bardzo ładne domki, nowiutkie, czyściutkie i eleganckie - zaprojektowane z klasą :)
            Goście witani są ciastem, a dla spragnionych jest kawa z ekspersu lub zimne piwo (również bezalkoholowe) i sok.
            Właściciele są bardzo serdeczni i czujni na potrzeby gości. Nawet jeśli pogoda nie sprzyja, w domku jest przytulnie.
            Serdecznie polecam :)`,
		},
		{
			name: 'Renek RF',
			text: 'Gorąco polecamy pobyt w domkach  Sea&Sun. Na wyposażeniu niczego nie brakuje, w razie potrzeby gospodarz jest bardzo życzliwy i pomocny. Wysoki poziom za przystępną cenę. Czekał na nas pyszny serniczek i zimne piwko. Zwierzęta są akceptowane. Okolica cicha i spokojna. Nie ma się do czego przyczepić ',
		},
		{
			name: 'Bernarda',
			text: `Jesteśmy bardzo zadowoleni z pobytu . Super  miejsce na rodzinny wypoczynek. Nowe , mega komfortowe domki, pięknie urządzone. Wszystko, co potrzeba znajduje się na miejscu. Mięciutkie ręczniki, mydełka,  czysta bialutka pościel, bardzo wygodne łóżka. Kuchnia dobrze wyposażona duża lodówka , toster, express z zapasem kawy, mikrofala . Telewizory w każdym pokoju, dostęp do Netflixa , odkurzacz , kominek , klimatyzacja i długo by wymieniać....`,
		},
		{
			name: 'Paweł',
			text: 'Urokliwe miejsce idealne na wypoczynek. Bardzo miły i pomocny właściciel. Piękne, nowoczesne domki urządzone ze smakiem i dbałością o detale. Jest ekspres do kawy, kawa, odkurzacz, telewizory w każdym pokoju, dostęp do netflixa, szybki internet oraz inne udogodnienia.',
		},
		{
			name: 'Norbert',
			text: `Polecam gorąco. Fajne miejsce, cisza, spokój, miły właściciel nawet pogodę zamówił i była.  Domki funkcjonalne, fajnie urządzone wyposażone we wszystko co potrzebne. Za rok znowu z rodzinką tam bedziemy.
            Panie Łukaszu dziękujemy i do zobaczenia.`,
		},
		{
			name: 'Ewelina',
			text: `Komfortowe, nowoczesne domki, świetnie wyposażone, pełna dyskrecja i prywatność, bardzo mili właściciele.
            Chętnie wrócimy jeszcze raz 🙂
            Polecamy serdecznie !!…`,
		},
	];

	return (
		<>
			<h2 className={classes.subtitle}>{t('opinions')}</h2>
			<Slider {...settings} className={classes.carousel}>
				{opinionList.map((item) => (
					<div key={item.name}>
						<div className={classes.opinion}>
							<h3 className={classes.opinion__name}>{item.name}</h3>
							{starIcon}
							{starIcon}
							{starIcon}
							{starIcon}
							{starIcon}

							<p className={classes.opinion__text}>{item.text}</p>
						</div>
					</div>
				))}
			</Slider>
			<div className={classes.more}>
				<Link
					className={classes.button}
					href='https://www.google.com/travel/search?q=Sea%20and%20Sun%20Sarbinowo&g2lb=2502548%2C2503771%2C2503781%2C2504374%2C4258168%2C4284970%2C4291517%2C4597339%2C4754388%2C4814050%2C4874190%2C4893075%2C4924070%2C4965990%2C10208620%2C72277293%2C72298667%2C72302247%2C72313836%2C72317059%2C72406588%2C72412680%2C72414906%2C72420596%2C72421566%2C72430562%2C72436632%2C72440517%2C72442338%2C72458707%2C72470899%2C72471395&hl=pl-PL&gl=pl&cs=1&ssta=1&ts=CAEaKwopEicyJTB4NDcwMDMxZDllYTY4NjNiZDoweDY2N2EwODIwZWI3ZWRmMGI&qs=CAEyE0Nnb0lpNzc3MjQ2RWdyMW1FQUU4Ag&ap=ugEHcmV2aWV3cw&ictx=1&ved=0CAAQ5JsGahcKEwiQ7L7ol9GDAxUAAAAAHQAAAAAQCQ'
					target='_blank'
				>
					{t('more_opinions')}
				</Link>
			</div>
		</>
	);
};

export default Opinions;
