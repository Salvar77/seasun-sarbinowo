import HeroImg from '@/components/HeroImg/HeroImg';
import classes from './Breakfasts.module.scss';
import Image from 'next/image';
import breakfast from '@/assets/images/breakfast.jpg';
import img7 from '@/assets/images/Sea_Sun_www-3.jpg';
import { useTranslation } from 'next-i18next';

const Breakfasts = () => {
	const { t } = useTranslation('common');
	return (
		<>
			<HeroImg
				src={breakfast}
				title={t('breakfasts')}
				alt='szwedzki stół nakryty jedzeniem, widok z góry'
			/>

			<div className={classes.breakfasts__container}>
				<div className={classes.breakfasts__info}>
					<h2 className={classes.breakfasts__title}>{t('breakfasts')}</h2>
					<p className={classes.breakfasts__text}>{t('breakfasts_text1')}</p>
					<p className={classes.breakfasts__text}>{t('breakfasts_text2')}</p>
					<p className={classes.breakfasts__text}>{t('breakfasts_text3')}</p>
				</div>
				<div className={classes.breakfasts__imgBox}>
					<Image
						src={img7}
						alt='śniadanie'
						className={classes.breakfasts__img}
					/>
				</div>
			</div>
		</>
	);
};

export default Breakfasts;
