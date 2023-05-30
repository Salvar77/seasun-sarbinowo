import Link from 'next/link';
import classes from './Footer.module.scss';
import Image from 'next/image';
import logo from '@/assets/images/seasunlogo.png';

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<>
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7692.751835939589!2d15.961480461618425!3d54.24149027263694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4700315c49a4a53d%3A0x456ef6f4e966bfb7!2sDino!5e0!3m2!1spl!2spl!4v1685352683765!5m2!1spl!2spl'
				allowFullScreen=''
				className={classes.map}
				loading='lazy'
				referrerPolicy='no-referrer-when-downgrade'
			></iframe>
			<div className={classes.footNewsletter}>
				<h3 className={classes.footNewsletter__title}>Zapisz się do newslettera, będziemy informować cię o najnowszych ofertach</h3>
				<form className={classes.footNewsletter__form}>
					<input
						type='email'
						name='email'
						id='email'
						placeholder='Email'
						className={classes.footNewsletter__input}
					/>
					<button type='submit' className={classes.footNewsletter__btn}>
						Wyślij
					</button>
				</form>
			</div>

			<div className={classes.footInfo}>
				<div className={classes.footInfo__info}>
					<div className={classes.footInfo__list}>
						<span className={classes.footInfo__item}>ul. Wrzosowa 50</span>
						<span className={classes.footInfo__item}>76-034 Sarbinowo</span>
						<span className={classes.footInfo__item}>Tel: 1234 567 890</span>
						<span className={classes.footInfo__item}>email@domena.pl</span>
					</div>
				</div>
				<Image src={logo} alt='logo' className={classes.footInfo__logo} />

				<div className={classes.footInfo__info}>
					<Link href='/privacy_policy'> Polityka prywatności </Link>
					<Link href='/regulations'> Regulamin </Link>
				</div>
			</div>

			<footer className={classes.footer}>
				<span className={classes.mid}>Sea&Sun Sarbinowo {currentYear}</span>
			</footer>
		</>
	);
};

export default Footer;
