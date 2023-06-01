import { useState, useEffect } from 'react';
import classes from './Nav.module.scss';
import Nav_desktop from './Nav_desktop';
import Nav_mobile from './Nav_mobile';
import { useTranslation } from 'next-i18next';

const Nav = ({ locale }) => {
	const { t } = useTranslation('footnav');

	const [width, setWidth] = useState(600);

	useEffect(() => {
		setWidth(window.innerWidth);
		const handleResizeWindow = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleResizeWindow);
		return () => {
			window.removeEventListener('resize', handleResizeWindow);
		};
	}, []);

	return (
		<header className={classes.nav}>
			{width >= 992 ? (
				<Nav_desktop locale={locale} t={t} />
			) : (
				<Nav_mobile locale={locale} t={t} />
			)}
		</header>
	);
};

export default Nav;
