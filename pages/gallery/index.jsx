import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
const { default: Gallery } = require("@/components/Gallery/Gallery")
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
    <Gallery/>
  )
}

export default index