import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import classes from './Gallery.module.scss';
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
import Img16 from '@/assets/images/Sea_Sun_www-16.jpg';
import Img17 from '@/assets/images/Sea_Sun_www-17.jpg';
import Img18 from '@/assets/images/Sea_Sun_www-18.jpg';
import Img19 from '@/assets/images/Sea_Sun_www-19.jpg';
import Img20 from '@/assets/images/Sea_Sun_www-20.jpg';
import kule from '@/assets/images/kule.jpg';
import trawa from '@/assets/images/trawa.jpg';
import trawa2 from '@/assets/images/trawa2.jpg';
import laki from '@/assets/images/laki.jpg';
import galleryHero from '@/assets/images/galleryHero.png';
import HeroImg from '../HeroImg/HeroImg';
import { useTranslation } from 'next-i18next';
const Gallery = () => {
	const {t} = useTranslation('footnav')
	const [lightboxController, setLightboxController] = useState({
		toggler: false,
		slide: 1,
	});

	function openLightboxOnSlide(number) {
		setLightboxController({
			toggler: !lightboxController.toggler,
			slide: number,
		});
	}
	const images = [
		{ number: 1, src: kule },
		{ number: 2, src: trawa },
		{ number: 3, src: trawa2 },
		{ number: 4, src: laki },
		{ number: 5, src: Img1 },
		{ number: 6, src: Img2 },
		{ number: 7, src: Img3 },
		{ number: 8, src: Img4 },
		{ number: 9, src: Img5 },
		{ number: 10, src: Img6 },
		{ number: 11, src: Img7 },
		{ number: 12, src: Img8 },
		{ number: 13, src: Img9 },
		{ number: 14, src: Img10 },
		{ number: 15, src: Img11 },
		{ number: 16, src: Img12 },
		{ number: 17, src: Img13 },
		{ number: 18, src: Img14 },
		{ number: 19, src: Img15 },
		{ number: 20, src: Img16 },
		{ number: 21, src: Img17 },
		{ number: 22, src: Img18 },
		{ number: 23, src: Img19 },
		{ number: 24, src: Img20 },
	];

	return (
		<>
			<HeroImg
				src={galleryHero}
				alt='Sea & Sun - domki letniskowe Sarbinowo'
				title={`${t('galeria')}`}
			/>
			<div className={classes.gallery}>
				{images.map((image) => (
					<div className={classes.gallery__item} key={image.number}>
						<Image
							src={image.src}
							alt='Sea & Sun - domki letniskowe Sarbinowo'
							onClick={() => openLightboxOnSlide(image.number)}
							className={classes.gallery__item__img}
						/>
					</div>
				))}
			</div>

			<FsLightbox
				toggler={lightboxController.toggler}
				sources={images.map((image) =>  
				<Image
					key={image.number}
					src={image.src}
					alt="Sea & Sun - domki letniskowe Sarbinowo"
					onClick={() => openLightboxOnSlide(image.number)}
					className={classes.gallery__item__img}
				  />)


				}
				slide={lightboxController.slide}
			/>
		</>
	);
};

export default Gallery;
