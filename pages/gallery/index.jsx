import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
const { default: Gallery } = require("@/components/Gallery/Gallery")
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

const index = () => {
  return (
    <Gallery/>
  )
}

export default index