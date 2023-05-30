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

import Voucher from '@/components/Voucher/Voucher'
import React from 'react'

const index = () => {
  return (
    <Voucher />
  )
}

export default index