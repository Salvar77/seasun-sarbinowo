import Domki from '@/components/Domki/Domki'
import HeroImg from '@/components/HeroImg/HeroImg'
import domki from '@/assets/images/kuleHero.png'
import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export async function getStaticProps({ locale }) {
	return {
	  props: {
		...(await serverSideTranslations(locale, [
		  'common','footnav', 'cottages'
		 ], null, ['en', 'pl', 'de'])),
		 locale
	  },
	}
  }
const Index = () => {
	const {t} = useTranslation('cottages')
  return (
    <>
    <HeroImg src={domki} alt='domki letniskowe sarbinowo' title={t('cottages')} big={true} />
    <Domki />
    </>
  )
}

export default Index