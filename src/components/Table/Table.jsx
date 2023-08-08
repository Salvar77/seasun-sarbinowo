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
				<th>{t('6ppl')}</th>
			</tr>

			<tr>
				<td rowSpan='1'>{t('july')}</td>
				<td>1-31</td>
				<td>{t('brakmiejsca')}</td>
			</tr>
			<tr>
				<td rowSpan='3'>{t('august')}</td>
				<td>1-18</td>
				<td>{t('brakmiejsca')}</td>
			</tr>
			<tr>
				<td>19-20</td>
				<td>450 zł {t('24h')}</td>
			</tr>
			<tr>
				<td>21-31</td>
				<td>390 zł {t('24h')}</td>
			</tr>
			</tbody>
		</table>
		</>
	);
};

export default Table;
