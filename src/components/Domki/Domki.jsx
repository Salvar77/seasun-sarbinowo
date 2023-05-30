import classes from './Domki.module.scss';
import Image from 'next/image';
import Img1 from '@/assets/images/Sea_Sun_www-1.jpg';
import Img2 from '@/assets/images/Sea_Sun_www-2.jpg';
import Img3 from '@/assets/images/Sea_Sun_www-3.jpg';
import Img4 from '@/assets/images/Sea_Sun_www-4.jpg';
import Img5 from '@/assets/images/Sea_Sun_www-5.jpg';
import Img6 from '@/assets/images/Sea_Sun_www-6.jpg';
import Img7 from '@/assets/images/Sea_Sun_www-7.jpg';
import Img8 from '@/assets/images/Sea_Sun_www-8.jpg';
import Img9 from '@/assets/images/Sea_Sun_www-9.jpg';
import Img10 from '@/assets/images/Sea_Sun_www-10.jpg';
import Img11 from '@/assets/images/Sea_Sun_www-11.jpg';
import Img12 from '@/assets/images/Sea_Sun_www-12.jpg';
import Img13 from '@/assets/images/Sea_Sun_www-13.jpg';
import Img14 from '@/assets/images/Sea_Sun_www-14.jpg';
import Img15 from '@/assets/images/Sea_Sun_www-15.jpg';


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import InfoGraph from './InfoGraph';
import parking from './img/parking.png';
import wifi from './img/wifi.png';
import snow from './img/snow.png';
import mute from './img/mute.png';
import camera from './img/camera.png';
import playground from './img/playground.png';
import plant from './img/plant.png';
import bedSheets from './img/bedSheets.png';
import umbrella from './img/umbrella.png';
import smartTv from './img/smartTv.png';



const Domki = () => {
	const images = [
		{
			src: Img1,
			alt: 'Sea & Sun - domki letniskowe Sarbinowo',
		},
		{
			src: Img2,
			alt: 'Sea & Sun - domki letniskowe Sarbinowo',
		},
		{
			src: Img3,
			alt: 'Sea & Sun - domki letniskowe Sarbinowo',
		},
		{
			src: Img4,
			alt: 'Sea & Sun - domki letniskowe Sarbinowo',
		},
		{
			src: Img5,
			alt: 'Sea & Sun - domki letniskowe Sarbinowo',
		},
		{
			src: Img6,
			alt: 'Sea & Sun - domki letniskowe Sarbinowo',
		},
		{
			src: Img7,
			alt: 'Sea & Sun - domki letniskowe Sarbinowo',
		},
		{
			src: Img8,
			alt: 'Sea & Sun - domki letniskowe Sarbinowo',
		},
		{
			src: Img11,
			alt: 'Sea & Sun - domki letniskowe Sarbinowo',
		},
		{
			src: Img12,
			alt: 'Sea & Sun - domki letniskowe Sarbinowo',
		},
		{
			src: Img13,
			alt: 'Sea & Sun - domki letniskowe Sarbinowo',
		},
		{
			src: Img14,
			alt: 'Sea & Sun - domki letniskowe Sarbinowo',
		},
		{
			src: Img15,
			alt: 'Sea & Sun - domki letniskowe Sarbinowo',
		},


	];
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
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<>
		<h2 className={classes.subtitle}> Sea & Sun Sarbinowo</h2>
			<div className={classes.info}>
				<p>
					Sea & Sun to nowo wybudowane, klimatyzowane, komfortowe domki na
					wynajem w cichej i urokliwej części Sarbinowa. Położone zaledwie około
					jednego kilometra od pięknej, piaszczystej, złotej plaży, do której
					dojdziesz spacerem w trochę ponad 10 minut. Nasz obiekt położony jest
					pośród łąk gdzie zaobserwować można dzikie zwierzęta takie jak ptactwo
					i sarny.
				</p>
				<p>
					Lokalizacja w spokojnej i zielonej okolicy sprzyja prawdziwemu
					wypoczynkowi na łonie natury z dala od zgiełku i hałasów miasta.
					Abyście czuli się Państwo bezpiecznie teren jest ogrodzony i
					monitorowany. Znajduje się na nim plac zabaw dla dzieci, który
					wyposażony jest dla wygody opiekunów w leżaki oraz fotele wiszące aby
					czas zabawy Twoich pociech upłynął w pełnym relaksie także dla Ciebie.
					Samochód można pozostawić na przestronnym, bezpłatnym parkingu.
				</p>
				<p>
					Na Państwa przyjazd czeka świeża pościel i miękkie ręczniki. Aby Was
					mile powitać, przygotowujemy ciasto, soki, napoje, piwo oraz
					zapewniamy kawę przez cały pobyt. Nasze świeże i pyszne śniadanie
					dostarczane jest pod drzwi w formie kosza piknikowego.
				</p>
				<p>
					Nasze dwupoziomowe domki o powierzchni 36m2 są klimatyzowane i
					przytulne. Każdy z nich posiada super-szybki internet satelitarny oraz
					czujniki dymu we wszystkich pokojach. Na parterze znajduje się
					przestronny salon z otwartą kuchnią i łazienką. W salonie czeka na Was
					wygodny narożnik z funkcją spania, telewizor Smart z kanałami
					telewizji kablowej i Netflix, a oświetlenie LED tworzy przyjemną
					atmosferę. Dopełnieniem jest stylowy kominek elektryczny. Z salonu
					można wyjść na prywatny ogródek z tarasem i zestawem wypoczynkowym
					oraz grillem.
				</p>

				<p>
					Kuchnia jest w pełni wyposażona, znajdziecie tam lodówkę z zamrażarką,
					mikrofalówkę, płytę ceramiczną, ekspres do kawy, toster oraz komplet
					sztućców i naczyń. W łazience z prysznicem znajduje się szerokie
					lustro, umywalka z szafką, ręczniki oraz kosmetyki hotelowe.
					Dodatkowo, dla Waszego komfortu, zainstalowaliśmy ogrzewanie
					podłogowe. Na piętrze znajdują się dwie sypialnie z wygodnymi
					podwójnymi łóżkami, telewizorem i szafkami nocnymi. Z okien roztacza
					się piękny widok na ogród i łąki.
				</p>
				<p>
					Chcemy zapewnić naszym Gościom prywatność i spokój, dlatego nie
					organizujemy imprez typu wieczory panieńskie czy kawalerskie. Nasz
					obiekt składa się z zaledwie 4 domków, co czyni naszą ofertę
					wyjątkową, ale również ograniczoną. Dlatego zachęcamy do kontaktu już
					dziś, jeśli chcą Państwo mieć pewność rezerwacji w interesującym Was
					terminie. Aby być na bieżąco z naszymi ofertami i rabatami na przyszły
					wypoczynek, zapraszamy do zapisania się do naszego newslettera na
					naszej stronie internetowej.
				</p>
			</div>

			<Slider {...settings} className={classes.carousel}>
				{images.map((image) => (
					<div key={image.src} className={classes.imgBox}>
						<Image src={image.src} alt={image.alt} className={classes.image} />
					</div>
				))}
			</Slider>
      <div className={classes.infog}>
			  <div className={classes.infoGraph}>
          <InfoGraph  src={parking} title='Parking' text='Bezpłatne i wygodne miejsca parkingowe.' />
          <InfoGraph  src={bedSheets} title='Świeża pościel i ręczniki' text='Zapewniamy świeżą pościel i miękkie ręczniki.' />
          <InfoGraph  src={snow} title='Klimatyzacja' text='Świeże i komfortowe wnętrze.' />
          <InfoGraph  src={playground} title='Plac zabaw' text='Zabawa i relaks dla najmłodszych.' />
          <InfoGraph  src={wifi} title='Wifi' text='Stałe połączenie online' />
          <InfoGraph  src={plant} title='Prywatny ogródek z tarasem ' text='Każdy domek posiada prywatny ogródek z tarasem.' />
          <InfoGraph  src={mute} title='Spokojna lokalizacja' text='Odpoczynek w cichej i urokliwej okolicy.' />
          <InfoGraph  src={camera} title='Monitoring i ogrodzenie' text=' Bezpieczeństwo i prywatność.' />
          <InfoGraph  src={umbrella} title='Bliskość plaży' text='Krótki spacer do pięknej, piaszczystej plaży' />
          <InfoGraph  src={smartTv} title='Smart TV' text='Telewizja kablowa oraz Netflix na wyciągnięcie ręki' />
         
      </div>
            <button className={classes.button}>Sprawdź dostępność</button>
      </div>
		</>
	);
};

export default Domki;
