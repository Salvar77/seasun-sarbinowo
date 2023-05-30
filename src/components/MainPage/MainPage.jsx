import classes from './MainPage.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import fbIcon from '@/assets/icons/facebook.png';
import igIcon from '@/assets/icons/instagram.png';
import phone from '@/assets/icons/phone-book.png';
import heroImg from '@/assets/images/Sea_Sun_www-14.jpg';


const MainPage = () => {
	return (
		<div className={classes.mainPage}>
			<Image src={heroImg} alt='Domki' className={classes.heroImg} />
			<div className={classes.heroText}>
				<h1>Sea&Sun Sarbinowo</h1>
			</div>
			<div className={classes.calendar}>
				<h2>Kalendarz rezerwacji</h2>
			</div>
			<div className={classes.iconBox}>
				
					<Link href='https://facebook.com' target='_blank' className={classes.icon}>
						<Image src={fbIcon} alt='Facebook' width={48} height={48}  />
					</Link>
					<Link href='https://instagram.com' target='_blank' className={classes.icon} >
						<Image src={igIcon} alt='Instagram' width={48} height={48} />
					</Link>
					<Link href='/contact' className={classes.icon}>
						<Image src={phone} alt='Telefon' width={48} height={48} />
					</Link>
				
			</div>
		</div>
	);
};

export default MainPage;
