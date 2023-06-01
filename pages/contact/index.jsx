import Contact from '@/components/Contact/Contact';
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

const ContactPage = () => {
	return (<>
		<Contact/>
	</>
	);
};

export default ContactPage;

