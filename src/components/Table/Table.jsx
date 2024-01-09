import React from 'react';
import classes from './Table.module.scss';
import { useTranslation } from 'next-i18next';


const Table = () => {
	const { t } = useTranslation('common');
	return (
		<>
		<h2 className={classes.header}>{t('free')} </h2>

		<table className={classes.table}>
			<tbody>
			<tr>
				<th>{t('month')}</th>
				<th>Data</th>
				<th>{t('5ppl')}</th>
			</tr>

			<tr>
				<td rowSpan='1'>{t('june')}</td>
				<td>28-30</td>
				<td>490 zł {t('24h')}</td>
				{/* <td>{t('brakmiejsca')}</td> */}
			</tr>			
			<tr>
				<td rowSpan='3'>{t('july')}</td>
				<td>1-5</td>
				<td>550 zł {t('24h')}</td>
			</tr>
			<tr>
				<td> 6-12</td>
				<td>550 zł {t('24h')}</td>
			</tr>
			<tr>
				<td>13-31</td>
				<td>590 zł {t('24h')}</td>
			</tr>
			<tr>
				<td rowSpan='3'>{t('august')}</td>
				<td>1-18</td>
				<td>590 zł {t('24h')}</td>
			</tr>
			<tr>
				<td>19-25</td>
				<td>490 zł {t('24h')}</td>
			</tr>
			<tr>
				<td>26-31</td>
				<td>420 zł {t('24h')}</td>
			</tr>
			</tbody>
		</table>

		<h3 className={classes.a5}>{t('above5')} </h3>
		</>
	);
};

export default Table;
