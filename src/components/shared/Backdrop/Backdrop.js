import React from 'react'
import classes from './Backdrop.module.scss'

export default function Backdrop(props) {
  if (props.isActiveBackdrop) {
    return (
      <div
        className={classes.Wrapper}
        onClick={() => props.clickedBackdrop()}>test</div>
    )
  } else {
    return null
  }
  
}
