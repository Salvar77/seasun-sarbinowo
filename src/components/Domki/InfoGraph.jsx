import classes from './Domki.module.scss'
import Image from 'next/image'

const InfoGraph = ({src, title, text}) => {
  return (
    <div className={classes.infoGraph__item}>
        <div className={classes.infoGraph__item__img}>
            <Image src={src} alt='ikona' width={64}  className={classes.icon}/>
        </div>
        <div className={classes.infoGraph__item__text}>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    </div>

  )
}

export default InfoGraph