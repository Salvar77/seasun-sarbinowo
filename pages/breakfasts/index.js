import React from 'react'
import Breakfasts from '@/components/Breakfasts/Breakfasts'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }) {
	return {
	  props: {
		...(await serverSideTranslations(locale, [
		  'contact',
		 ], null, ['en', 'pl'])),
		 locale,
	  },
	}
  }


const index = () => {
  return (
    <Breakfasts />

  )
}

export default index