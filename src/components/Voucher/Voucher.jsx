import classes from './Voucher.module.scss';
import Image from 'next/image';
import voucher from './voucher.png';
import { useTranslation } from 'next-i18next';

const Voucher = () => {
	const {t }	= useTranslation('common');
	return (
		<div className={classes.voucher}>
			<div className={classes.voucher__img}>
				<Image src={voucher} alt='voucher' className={classes.voucher_imgg} />
			</div>
			<div className={classes.voucher__text}>
				<h3>{t('voucher')}</h3>
				<p>
					{t('voucher_text1')}
				</p>
				<p>
					{t('voucher_text2')}
				</p>
				<p>
					{t('voucher_text3')}
				</p>
			</div>
		</div>
	);
};

export default Voucher;
