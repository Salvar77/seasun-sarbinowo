import classes from './Nav.module.scss';
import { motion, AnimatePresence } from "framer-motion"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import arrow from '@/assets/images/arrow.svg';
import { useRouter } from 'next/router';

const SelectLanguage = ({locale}) => {
	const [shownav, setShownav] = useState(false);
    const router = useRouter();
    const { pathname } = router;
    console.log(pathname);

    
	const closeNav = () => {
		setShownav(false);
	};

    const toggleNav = () => {   
        setShownav(!shownav);
    }

    console.log(locale);
	return (
		<div className={classes.lang}>

		<button className={classes.lang__button} onClick={toggleNav}  onBlur={closeNav}>
            <span className={classes.lang__button_span}> {locale} <Image src={arrow} alt='arrow' /></span> 
        </button>

            <AnimatePresence>
                 {shownav && (
                 <motion.ul className={classes.lang__list}
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}  >       
                    <Link onClick={closeNav} className={classes.lang__link} locale='pl' href={pathname} >PL</Link>
                    <Link onClick={closeNav} className={classes.lang__link} locale='en' href={pathname} >EN</Link>
                    <Link onClick={closeNav} className={classes.lang__link} locale='de' href={pathname} >DE</Link>
                    
                </motion.ul>
                )}
            </AnimatePresence>
		</div>
	);
};
export default SelectLanguage;
