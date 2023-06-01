import Statute from '@/components/Statute/Statute'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
export async function getStaticProps({ locale }) {
	return {
	  props: {
		...(await serverSideTranslations(locale, [
		  'common','footnav', 'statute'
		 ], null, ['en', 'pl', 'de'])),
		 locale
	  },
	}
  }
const index = () => {
  return (
    <Statute />
  )
}

export default index