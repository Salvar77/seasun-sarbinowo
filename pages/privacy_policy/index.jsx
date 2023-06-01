import Privacy from '@/components/privacy_politics/Privacy'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
export async function getStaticProps({ locale }) {
	return {
	  props: {
		...(await serverSideTranslations(locale, [
		  'common','footnav','privacy'
		 ], null, ['en', 'pl', 'de'])),
		 locale
	  },
	}
  }
const index = () => {
  return (
   <Privacy/>
  )
}

export default index