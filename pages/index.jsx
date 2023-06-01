import MainPage from '@/components/MainPage/MainPage';
import Domki from '@/components/Domki/Domki';
import classes from '@/components/Domki/Domki.module.scss';
import Voucher from '@/components/Voucher/Voucher';
import Image from 'next/image';
import heroImg from '@/assets/images/domki2.png';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
	return {
	  props: {
		...(await serverSideTranslations(locale, [
		  'common','footnav','cottages'
		 ], null, ['en', 'pl', 'de'])),
		 locale
	  },
	}
  }

export default function Home() {
	const { t } = useTranslation('cottages');
	return (
		<>
			<MainPage />
			<h2 className={classes.title}>{t('cottages')}</h2>
			<Image src={heroImg} alt='Domki' className={classes.heroImg} />
			<Domki />
			<Voucher />
		</>
	);
}
