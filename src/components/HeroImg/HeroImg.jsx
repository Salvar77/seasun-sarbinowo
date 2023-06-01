import React from 'react';
import classes from './HeroImg.module.scss';
import Image from 'next/image';

const HeroImg = ({ src, alt, title, big }) => {
	return (
		<div className={big ? `${classes.heroImg} ${classes.heroImg__b}` : `${classes.heroImg}`}>
			<Image src={src} alt={alt} className={classes.heroImg__img} />
			<h1 className={classes.heroImg__title}>{title}</h1>
		</div>
	);
};

export default HeroImg;
