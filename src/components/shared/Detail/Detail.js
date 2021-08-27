import React from 'react'
import classes from './Detail.module.scss'

export default function Detail(props) {
  if (props.isActiveDetail) {
    return (
      <div className={classes.Wrapper}>
        <div className={classes.Content}>
          <div className={classes.Left}>
            <div className={classes.Image}></div>
          </div>
          <div className={classes.Right}>
            <div className={classes.Close} onClick={() => props.clickedBackdrop()}>Close</div>
            <div className={classes.Title}>Batman VS Sangkuriang (2018) Remake Sinagpore</div>
            <div className={classes.RatingAndDuration}>Rating : 4.5 &nbsp; &nbsp; Duration : 120 menit</div>
            <div className={classes.Sinopsis}>Mollit excepteur minim proident laborum. Laboris ad nulla sit sint culpa consectetur nulla duis irure pariatur magna. Aute est duis consectetur incididunt exercitation aliquip cupidatat. Culpa officia cillum anim aliquip irure laboris cupidatat occaecat dolore et labore. Do consequat minim nulla aliqua officia culpa qui ea ullamco reprehenderit eu. Consequat non ex non nostrud occaecat sit anim anim in magna ullamco veniam. Veniam anim magna officia deserunt ad anim.</div>
          </div>
        </div>
      </div>
    )
  } else {
    return null
  }
}
