import React from 'react';
import classes from './Table.module.scss';
import { useTranslation } from 'next-i18next';


const Table = () => {
	const { t } = useTranslation('common');
	return (
		<>
		<h2 className={classes.header}>{t('pricing')} </h2>

		<table className={classes.table}>
			<tbody>
			<tr>
				<th>{t('month')}</th>
				<th>Data</th>
				{/* <th>{t('4ppl')}</th>
				<th>{t('5ppl')}</th> */}
				<th>{t('6ppl')}</th>
			</tr>
			<tr>
				<td rowSpan='2'>{t('june')}</td>
				<td>1-22</td>
				{/* <td>350 zł</td>
				<td>400 zł</td> */}
				<td>350 zł {t('24h')} </td>
			</tr>
			<tr>
				<td>23-30</td>
				{/* <td>470 zł</td>
				<td>520 zł</td> */}
				<td>390 zł  {t('24h')}</td>
			</tr>
			<tr>
				<td rowSpan='2'>{t('july')}</td>
				<td>1-6</td>
				{/* <td>490 zł</td>
				<td>550 zł</td> */}
				<td>430 zł {t('24h')}</td>
			</tr>
			<tr>
				<td>7-31</td>
				{/* <td>590 zł</td>
				<td>650 zł</td> */}
				<td>490 zł  {t('24h')}</td>
			</tr>
			<tr>
				<td rowSpan='2'>{t('august')}</td>
				<td>1-20</td>
				{/* <td>490 zł</td>
				<td>550 zł</td> */}
				<td>490 zł  {t('24h')}</td>
			</tr>
			<tr>
				<td>21-31</td>
				{/* <td>390 zł</td>
				<td>450 zł</td> */}
				<td>390 zł {t('24h')}</td>
			</tr>
			</tbody>
		</table>
		</>
	);
};

export default Table;
