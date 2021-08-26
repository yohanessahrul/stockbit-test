import React, { useState, useEffect } from 'react'
import Layout from '../../components/partials/Layout/Layout'
import { getAllMovies } from '../../redux/Films/AvailabilityAction'
import classes from './Home.module.scss'
import { connect } from 'react-redux'

function Home(props) {
  const [title, setTitle] = useState('batman')
  const [year, setYear] = useState('2010')
  const [page, setPage] = useState(1)
  const [plot, setPlot] = useState('full')

  useEffect(() => {
    let payload = { title, year, page, plot }
    props.getAllMoviesHandler(payload)
  }, [])

  useEffect(() => {
    if (props.movies) {
      console.log(`movies`, props.movies)
    }
  }, [props.movies])

  let movieList = null
  if (props.movies && props.movies.length > 0) {
    movieList = props.movies.map((movie, movieKey) => {
      return (
        <div className={classes.Item}>
          lorem pisum
        </div>
      )
    })
  }

  return (
    <div>
      <Layout>
        <div className={classes.Wrapper}>
          <div className={classes.Container}>
            <div className={classes.FilterArea}>Filter Area</div>
            <div className={classes.Content}>
              {movieList}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    movies: state.MovieReducer.movies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllMoviesHandler: (payload) => dispatch(getAllMovies(payload))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)