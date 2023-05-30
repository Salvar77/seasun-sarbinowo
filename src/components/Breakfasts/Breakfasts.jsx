import HeroImg from '@/components/HeroImg/HeroImg';
import classes from './Breakfasts.module.scss';
import Image from 'next/image';
import breakfast from '@/assets/images/breakfast.jpg';
import img7 from '@/assets/images/Sea_Sun_www-3.jpg';

const Breakfasts = () => {
	return (
		<>
			<HeroImg
				src={breakfast}
				title='Śniadania'
				alt='szwedzki stół nakryty jedzeniem, widok z góry'
			/>

			<div className={classes.breakfasts__container}>
				<div className={classes.breakfasts__info}>
					<h2 className={classes.breakfasts__title}>Śniadania</h2>
					<p className={classes.breakfasts__text}>
					
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, odio, tempora porro cum, explicabo ad reiciendis repellendus error laborum ducimus vel quaerat cupiditate molestiae quia temporibus sint ullam! Aliquam pariatur deserunt asperiores? </p>
          <p className={classes.breakfasts__text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, beatae! Doloribus maxime neque nostrum repellat quidem aliquid alias praesentium voluptas sint expedita rem, eveniet nam vitae incidunt modi assumenda aut.</p>
				</div>
				<div className={classes.breakfasts__imgBox}>
					<Image src={img7} alt='śniadanie' className={classes.breakfasts__img} />
				</div>
			</div>
		</>
	);
};

export default Breakfasts;
