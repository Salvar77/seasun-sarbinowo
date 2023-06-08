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
import Oimg1 from '@/assets/images/Sea_Sun_outside_www-1.jpg';
import Oimg2 from '@/assets/images/Sea_Sun_outside_www-2.jpg';
import Oimg3 from '@/assets/images/Sea_Sun_outside_www-3.jpg';
import Oimg4 from '@/assets/images/Sea_Sun_outside_www-4.jpg';
import Oimg5 from '@/assets/images/Sea_Sun_outside_www-5.jpg';
import Oimg6 from '@/assets/images/Sea_Sun_outside_www-6.jpg';
import Oimg7 from '@/assets/images/Sea_Sun_outside_www-7.jpg';
import Oimg8 from '@/assets/images/Sea_Sun_outside_www-8.jpg';
import Oimg9 from '@/assets/images/Sea_Sun_outside_www-9.jpg';
import Oimg10 from '@/assets/images/Sea_Sun_outside_www-10.jpg';
import Oimg11 from '@/assets/images/Sea_Sun_outside_www-11.jpg';
import Oimg12 from '@/assets/images/Sea_Sun_outside_www-12.jpg';
import Oimg13 from '@/assets/images/Sea_Sun_outside_www-13.jpg';
import Oimg14 from '@/assets/images/Sea_Sun_outside_www-14.jpg';
import Oimg15 from '@/assets/images/Sea_Sun_outside_www-15.jpg';
import Oimg16 from '@/assets/images/Sea_Sun_outside_www-16.jpg';
import Oimg17 from '@/assets/images/Sea_Sun_outside_www-17.jpg';
import Oimg18 from '@/assets/images/Sea_Sun_outside_www-18.jpg';
import Oimg19 from '@/assets/images/Sea_Sun_outside_www-19.jpg';
import Oimg20 from '@/assets/images/Sea_Sun_outside_www-20.jpg';
import Oimg21 from '@/assets/images/Sea_Sun_outside_www-21.jpg';
import Oimg22 from '@/assets/images/Sea_Sun_outside_www-22.jpg';

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
		{ number: 1, src: Oimg8 },
		{ number: 2, src: Oimg9 },
		{ number: 3, src: Oimg10 },
		{ number: 4, src: Oimg13 },
		{ number: 5, src: Oimg5 },
		{ number: 6, src: Oimg4 },
		{ number: 7, src: Oimg21 },
		{ number: 8, src: Oimg20 },
		{ number: 9, src: Oimg1 },
		{ number: 10, src: Img1 },
		{ number: 11, src: Img2 },
		{ number: 12, src: Img3 },
		{ number: 13, src: Img4 },
		{ number: 14, src: Img5 },
		{ number: 15, src: Img6 },
		{ number: 16, src: Img7 },
		{ number: 17, src: Img8 },
		{ number: 18, src: Img9 },
		{ number: 19, src: Img10 },
		{ number: 20, src: Img11 },
		{ number: 21, src: Img12 },
		{ number: 22, src: Img13 },
		{ number: 23, src: Img14 },
		{ number: 24, src: Oimg14 },
		{ number: 25, src: Img15 },
		{ number: 26, src: Img16 },
		{ number: 27, src: Oimg16 },
		{ number: 28, src: Img17 },
		{ number: 29, src: Img18 },
		{ number: 30, src: Img19 },
		{ number: 31, src: Img20 },
		{ number: 32, src: Oimg12 },
		{ number: 33, src: Oimg3 },
		{ number: 34, src: Oimg15 },
		{ number: 35, src: Oimg11 },
		{ number: 36, src: Oimg22 },
		{ number: 37, src: Oimg2 },
		{ number: 38, src: Oimg17 },
		{ number: 39, src: Oimg7 },
		{ number: 40, src: Oimg6 },
		{ number: 41, src: Oimg18 },
		{ number: 42, src: Oimg19 },
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
