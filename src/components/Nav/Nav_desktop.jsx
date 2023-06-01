import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/images/seasunlogo.png';
import classes from './Nav.module.scss';
import SelectLanguage from './SelectLanguage';

const Nav_desktop = ({ locale, t }) => {
	return (
		<nav className={classes.nav_container}>
			<div className={classes.nav__links_box}>
				<Link className={classes.nav_link} href={`/holiday_cottages`}>
					{t('domki')}
				</Link>
				<Link className={classes.nav_link} href={`/breakfasts`}>
					{t('sniadania')}
				</Link>
				<Link className={classes.nav_link} href={`/special_offert`}>
					{t('oferta_specjalna')}
				</Link>
			</div>
			
				<Link href={`/`}>
					<Image
						src={logo}
						alt='sea and sun logo'
						className={classes.nav_logoimg}
					/>
				</Link>
	
			<div className={classes.nav__links_box}>
				<Link className={classes.nav_link} href={`/gallery`}>
					{t('galeria')}
				</Link>
				<Link className={classes.nav_link} href={`/regulations`}>
					{t('regulamin')}
				</Link>
				<Link className={classes.nav_link} href={`/contact`}>
					{t('kontakt')}
				</Link>
				{/* <Link className={classes.nav_link} href={`/bookings`}>
					Rezerwacja
				</Link> */}
	
				<SelectLanguage locale={locale} />
			</div>

		</nav>
	);
};
export default Nav_desktop;
