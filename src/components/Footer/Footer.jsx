import Link from 'next/link';
import classes from './Footer.module.scss';
import Image from 'next/image';
import logo from '@/assets/images/seasunlogo.png';
import Newsletter from './Newsletter';

import { useTranslation } from 'next-i18next';

const Footer = () => {
	const { t } = useTranslation('footnav')

	const currentYear = new Date().getFullYear();
	
	return (
		<>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2331.524022406562!2d15.96716313510059!3d54.24161225568549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4700302d1277f41f%3A0x40452a450b9559f6!2sWrzosowa%2050%2C%2076-034!5e0!3m2!1spl!2spl!4v1685554036594!5m2!1spl!2spl"
				title='mapa lokalizacji'
				allowFullScreen=''
				className={classes.map}
				loading='lazy'
				referrerPolicy='no-referrer-when-downgrade'
			></iframe>
			<div className={classes.footNewsletter}>
				<Newsletter t={t} />

			</div>

			<div className={classes.footInfo}>
				<div className={classes.footInfo__info}>
					<div className={classes.footInfo__list}>
						<span className={classes.footInfo__item}>ul. Wrzosowa 50</span>
						<span className={classes.footInfo__item}>76-034 Sarbinowo</span>
						<a href='tel:+48518494880' target='_blank' className={classes.footInfo__item}>Tel: 518 494 880</a>
						<span className={classes.footInfo__item}>booking@seasunsarbinowo.pl</span>
					</div>
				</div>
				<Image src={logo} alt='logo' className={classes.footInfo__logo} />

				<div className={classes.footInfo__info}>
					<Link href='/privacy_policy'> {t('polityka_prywatnosci')}</Link>
					<Link href='/statute'> {t('regulamin')} </Link>
				</div>
			</div>

			<footer className={classes.footer}>
				<span className={classes.mid}>Sea&Sun Sarbinowo {currentYear}</span>
			</footer>
		</>
	);
};

export default Footer;
