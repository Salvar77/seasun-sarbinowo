import Contact from '@/components/Contact/Contact';
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

const ContactPage = () => {
	return (<>
		<Contact/>
	</>
	);
};

export default ContactPage;

