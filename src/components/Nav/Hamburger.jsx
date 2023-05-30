import classes from './Nav.module.scss';
const Hamburger = (props) => {
	return (
		<div
			className={
				props.isActive
					? `${classes.button_box} ${classes.active}`
					: `${classes.button_box}`
			}
		>
			<div className={classes.button} draggable onClick={props.onClick}>
				<div className={classes.burger} />
			</div>
		</div>
	);
};
export default Hamburger;
