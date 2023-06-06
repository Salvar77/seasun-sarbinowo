
import { useTranslation } from 'next-i18next'
import classes from './Statute.module.scss'

const Statute = () => {
    const {t} = useTranslation('statute')
  return (
    <div className={classes.statute_container}>
        <h1 className={classes.statute_maintitle}>{t('title')}</h1>
        <p className={classes.statute_text}>{t('p1')}</p>
        <p className={classes.statute_text}>{t('p2')}</p>
        <p className={classes.statute_text}>{t('p3')}</p>
        <p className={classes.statute_text}>{t('p4')}</p>
        <p className={classes.statute_text}>{t('p5')}</p>
        <p className={classes.statute_text}>{t('p6')}</p>
        <p className={classes.statute_text}>{t('p7')}</p>
        <p className={classes.statute_text}>{t('p8')}</p>
        <p className={classes.statute_text}>{t('p9')}</p>
        <p className={classes.statute_text}>{t('p10')}</p>
        <p className={classes.statute_text}>{t('p11')}</p>
        <p className={classes.statute_text}>{t('p12')}</p>
        <p className={classes.statute_text}>{t('p13')}</p>
        <p className={classes.statute_text}>{t('p14')}</p>
        <p className={classes.statute_text}>{t('p15')}</p>
        <p className={classes.statute_text}>{t('p16')}</p>
        <p className={classes.statute_text}>{t('p17')}</p>
        <p className={classes.statute_text}>{t('p17.1')}</p>
        <p className={classes.statute_text}>{t('p17.2')}</p>
        <p className={classes.statute_text}>{t('p18')}</p>
        <p className={classes.statute_text}>{t('p19')}</p>
        <p className={classes.statute_text}>{t('p20')}</p>
        <p className={classes.statute_text}>{t('p21')}</p>
        <p className={classes.statute_text}>{t('p22')}</p>
        <p className={classes.statute_text}>{t('p23')}</p>
        <p className={classes.statute_text}>{t('p24')}</p>
        <p className={classes.statute_text}>{t('p25')}</p>
        <p className={classes.statute_text}>{t('p26')}</p>
        <p className={classes.statute_text}>{t('p27')}</p>
        <p className={classes.statute_text}>{t('p28')}</p>
        <p className={classes.statute_text}>{t('p29')}</p>
        <p className={classes.statute_text}><b>{t('p30')}</b></p>
        <p className={classes.statute_text}>{t('p30.1')}</p>
        <p className={classes.statute_text}>{t('p30.2')}</p>
        <p className={classes.statute_text}>{t('p30.3')}</p>
        <p className={classes.statute_text}>{t('p30.4')}</p>
        <p className={classes.statute_text}>{t('p31')}</p>
        <p className={classes.statute_text}><b> {t('p32')}</b> </p>
        <p className={classes.statute_text}>{t('p32.1')}</p>
        <p className={classes.statute_text}>{t('p32.2')}</p>
        <p className={classes.statute_text}>{t('p32.3')}</p>
        <p className={classes.statute_text}>{t('p32.4')}</p>


    </div>


        

  )
}

export default Statute