import React from 'react'
import classes from './Poster.module.scss'

export default function Poster(props) {
  if (props.isActivePoster) {
    return (
      <div className={classes.Wrapper}>
        <div className={classes.Content}>
          <div className={classes.Left}>
            <div className={classes.Image}>
              <img src={props.detailData.Poster} alt={`Poster ${props.detailData.Title}`} />
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return null
  }
}
