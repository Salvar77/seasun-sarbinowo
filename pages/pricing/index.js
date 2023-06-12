import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
export async function getStaticProps({ locale }) {
	return {
	  props: {
		...(await serverSideTranslations(locale, [
		  'common','footnav' 
		 ], null, ['en', 'pl', 'de'])),
		 locale
	  },
	}
  }

import Voucher from '@/components/Voucher/Voucher'
import React from 'react'
import Table from '@/components/Table/Table'

const index = () => {
  return (
   <Table />
  )
}

export default index