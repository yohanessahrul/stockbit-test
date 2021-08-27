import React, { useEffect } from 'react'
import classes from './Detail.module.scss'
import Layout from '../../components/partials/Layout/Layout'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getDetailMovie } from '../../redux/Films/AvailabilityAction'

function Detail(props) {
  useEffect(() => {
    props.onInitialMovieDetail({id: props.match.params.slug})
  }, [])

  let content = <div className={classes.Content}>Loading...</div>
  if (props.detailMovie) {
    content = (
      <div className={classes.Content}>
        <div className={classes.Left}>
          <div className={classes.Image}>
            <div className={classes.Duration}>
              Duration : {props.detailMovie.Runtime}
            </div>
            <div className={classes.Rating}>
              IMDb Rate : {props.detailMovie.imdbRating}
            </div>
            <img src={props.detailMovie.Poster} alt="" />
          </div>
        </div>

        <div className={classes.Right}>
          <Link to="/">
            <div className={classes.Close}>
              Back
            </div>
          </Link>
          <div className={classes.Title}>{props.detailMovie.Title} ({props.detailMovie.Year})</div>

          <div className={classes.Sinopsis}>{props.detailMovie.Plot}</div>

          <div className={classes.Actors}>
            Actor : {props.detailMovie.Actors}
          </div>

          <div className={classes.Genre}>
            <ul>
              {props.detailMovie.Genre.split(', ').map((genre, genreKey) => (
                <li key={genreKey}>{genre}</li>
              ))}
              <div className={classes.Clear}></div>
            </ul>
          </div>

          <div className={classes.OthersInformation}>
            <div className={classes.Left}>
              <div className={classes.Others}>
                <div className={classes.Label}>Country</div>
                <div className={classes.Value}>{props.detailMovie.Country}</div>
                <div className={classes.Clear}></div>
              </div>
              <div className={classes.Others}>
                <div className={classes.Label}>Director</div>
                <div className={classes.Value}>{props.detailMovie.Director}</div>
                <div className={classes.Clear}></div>
              </div>
              <div className={classes.Others}>
                <div className={classes.Label}>Production</div>
                <div className={classes.Value}>{props.detailMovie.Production}</div>
                <div className={classes.Clear}></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }

  return (
    <div>
      <Layout>
        <div className={classes.Wrapper}>
          <div className={classes.Container}>
            {content}
          </div>
        </div>
      </Layout>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    detailMovie: state.MovieReducer.detailMovie,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInitialMovieDetail: (payload) => dispatch(getDetailMovie(payload)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)