import React from 'react';
import classes from './Privacy.module.scss';
import { useTranslation } from 'next-i18next';

const Privacy = () => {
	const { t } = useTranslation('privacy');
	return (
		<div className={classes.privacy}>
			<h1>{t('title')}</h1>
			<p className={classes.title}>{t('data_admnin')}</p>
			<p className={classes.text}>{t('data_admin_text')}</p>
			<p className={classes.text}> Firma: nazwa </p>
			<p className={classes.text}>NIP: 122 000 000 </p>
			<p className={classes.text}>E-mail: seasunsarbinowo@gmail.com</p>

			<p className={classes.title}>{t('data_gather')}</p>
			<p className={classes.text}>{t('data_gather_text')}</p>

			<p className={classes.title}>{t('data_use')}</p>
			<p className={classes.text}>{t('data_use_text1')}</p>
			<p className={classes.text}>{t('data_use_text2')}</p>

			<p className={classes.title}>{t('newsletter')}</p>
			<p className={classes.text}>{t('newsletter_text')}</p>
			<p className={classes.text}>{t('newsletter_text2')}</p>

			<p className={classes.title}>{t('google_analytics')}</p>
			<p className={classes.text}>{t('google_analytics_text')}</p>

			<p className={classes.title}>{t('other')}</p>
			<p className={classes.text}>{t('other_text')}</p>
			<p className={classes.text}>{t('other_text2')}</p>
			<p className={classes.text}>seasunsarbinowo@gmail.com</p>
		</div>
	);
};

export default Privacy;
