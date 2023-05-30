import MainPage from '@/components/MainPage/MainPage';
import Domki from '@/components/Domki/Domki';
import classes from '@/components/Domki/Domki.module.scss';
import Voucher from '@/components/Voucher/Voucher';
import Image from 'next/image';
import heroImg from '@/assets/images/domki2.png';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['contact'], null, [
				'en',
				'pl',
			])),
			locale,
		},
	};
}

export default function Home() {
	return (
		<>
			<MainPage />
			<h2 className={classes.title}>Domki letniskowe Sarbinowo</h2>
			<Image src={heroImg} alt='Domki' className={classes.heroImg} />
			<Domki />
			<Voucher />
		</>
	);
}
