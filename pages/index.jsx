import MainPage from '@/components/MainPage/MainPage';
import Domki from '@/components/Domki/Domki';
import classes from '@/components/Domki/Domki.module.scss';
import Voucher from '@/components/Voucher/Voucher';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import outside from '@/assets/images/outside.jpg';
import Image from 'next/image';
import Table from '@/components/Table/Table';

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(
				locale,
				['common', 'footnav', 'cottages'],
				null,
				['en', 'pl', 'de']
			)),
			locale,
		},
	};
}

export default function Home() {
	const { t } = useTranslation('cottages');
	return (
		<>
			<MainPage />
			<h2 className={classes.title}>{t('cottages')}</h2>
			<div
				className={	`${classes.heroImg} ${classes.heroImg__b}`}
			>
				<Image src={outside} alt={'SeaSunSarbinowo'} className={classes.heroImg__img} />
			</div>
			
			<Domki />
			<Table />
		</>
	);
}
