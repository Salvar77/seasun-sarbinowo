import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
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

const MyComponent = () => {



	return (
		<div>
			<h1>Mój komponent Next.js</h1>
		
		</div>
	);
};

export default MyComponent;
