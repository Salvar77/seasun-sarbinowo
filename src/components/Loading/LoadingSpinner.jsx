import React from 'react'
import classes from './LoadingSpinner.module.scss'
const LoadingSpinner = () => {
  return (
    <div className={classes.loadbox}>
        <span className={classes.loader}/>
     </div>
  )
}

export default LoadingSpinner