import classes from './Nav.module.scss';
import Image from 'next/image';
import logo from '@/assets/images/seasunlogo.png';
import Link from 'next/link';
import Hamburger from './Hamburger';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SelectLanguage from './SelectLanguage';
import { useTranslation } from 'next-i18next';

function Nav_mobile({ locale }) {
	const [isActive, setIsActive] = useState(false);
	const toggleNav = () => {
		setIsActive(!isActive);
	};
	const { t } = useTranslation('footnav');
	return (
		<>
			<nav className={classes.nav_container}>
				<div className={classes.nav_mobile__logo}>
					<Link href={`/`}>
						<Image src={logo}  alt='midform logo'className={classes.nav_logoimg} />
					</Link>
				</div>
				<Hamburger
					onClick={toggleNav}
					isActive={isActive}
					ariaLabel='open nav'
				/>
			</nav>
			<AnimatePresence>
				{isActive && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						className={classes.nav_mobile}
					>
						<ul className={classes.nav_mobile__links}>
							<li className={classes.nav_mobile__link} onClick={toggleNav}>
								<Link href={`/`}>{t('main')}</Link>
							</li>
							<li className={classes.nav_mobile__link} onClick={toggleNav}>
								<Link href={`/holiday_cottages`} >{t('domki')}</Link>
							</li>
							{/* <li className={classes.nav_mobile__link} onClick={toggleNav}>
								<Link href={`/breakfasts`}>{t('sniadania')}</Link>
							</li> */}
							<li className={classes.nav_mobile__link} onClick={toggleNav}>
								<Link href={`/pricing`}>{t('cennik')}</Link>
							</li>
							<li className={classes.nav_mobile__link} onClick={toggleNav}>
								<Link href={`/gallery`}>{t('galeria')}</Link>
							</li>
							<li className={classes.nav_mobile__link} onClick={toggleNav}>
								<Link href={`/statute`}>{t('regulamin')}</Link>
							</li>
							<li className={classes.nav_mobile__link} onClick={toggleNav}>
								<Link href={`/contact`}>{t('kontakt')}</Link>
							</li>
							{/* <li className={classes.nav_mobile__link} onClick={toggleNav}>
								<Link href={`/bookings`}>Rezerwacja</Link>
							</li> */}


						</ul>
						<SelectLanguage  locale={locale} />
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}

export default Nav_mobile;
