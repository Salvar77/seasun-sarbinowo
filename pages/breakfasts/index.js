import React from 'react'
import Breakfasts from '@/components/Breakfasts/Breakfasts'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

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


const index = () => {
  return (
    <Breakfasts />

  )
}

export default index