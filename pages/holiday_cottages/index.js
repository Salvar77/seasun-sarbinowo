import Domki from '@/components/Domki/Domki'
import HeroImg from '@/components/HeroImg/HeroImg'
import domki from '@/assets/images/domki2.png'
import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
export async function getStaticProps({ locale }) {
	return {
	  props: {
		...(await serverSideTranslations(locale, [
		  'contact',
		 ], null, ['en', 'pl'])),
		 locale
	  },
	}
  }

const index = () => {
  return (
    <>
    <HeroImg src={domki} alt='domki letniskowe sarbinowo' title='Domki letniskowe Sarbinowo' />
    <Domki />
    </>
  )
}

export default index