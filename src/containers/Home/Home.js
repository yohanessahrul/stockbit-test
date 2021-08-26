import React, { useState, useEffect } from 'react'
import Layout from '../../components/partials/Layout/Layout'
import { getAllMovies, getMoreMovies } from '../../redux/Films/AvailabilityAction'
import classes from './Home.module.scss'
import { connect } from 'react-redux'

function Home(props) {
  const [title, setTitle] = useState('batman')

  useEffect(() => {
    props.onInitialMovies({title: title, page: props.page})

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  useEffect(() => {
    if (props.movies) {
      window.addEventListener('scroll', handleScroll, { passive: true })
      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    }
  }, [props.movies])

  const handleScroll = () => {
    const {
      scrollTop,
      scrollHeight,
      clientHeight
    } = document.documentElement

    if (scrollHeight === scrollTop + clientHeight) {
      props.getMoreMoviesHandler({ title: title, page: props.page })
    }
  }

  const submitKeyword = () => {
    let payload = { title, page: 1 }
    props.onInitialMovies(payload)
  }
  
  let movieList = null
  if (props.movies && props.movies.length > 0) {
    movieList = props.movies.map((movie, movieKey) => {
      return (
        <div className={classes.Item} key={movieKey}>
          <div className={classes.Label}>{movie.Type}</div>
          <div className={classes.Left}>
            <div className={classes.Image}>
              {movie.Poster !== "N/A" ?
                <img src={movie.Poster} />
                : <div className={classes.NoImage}>No Image</div>}
            </div>
          </div>
          <div className={classes.Right}>
            <div className={classes.Title}>{movie.Title} ({movie.Year})</div>
            <div className={classes.RatingAndDuration}>
              <div className={classes.Item}>Rating : 4.5 &nbsp; &nbsp; Duration : 120 menit</div>
            </div>
            <div className={classes.Sinopsis}>Tempor minim ullamco aliquip do fugiat enim nisi fugiat commodo anim irure laboris. Culpa ea et consequat enim consequat deserunt aute cupidatat excepteur nostrud qui. Id non ipsum cupidatat ipsum incididunt Lorem aliqua amet cupidatat velit. Et Lorem nostrud exercitation laboris labore. Eiusmod proident fugiat quis sunt ea aliqua veniam mollit.</div>
          </div>
        </div>
      )
    })
  }

  return (
    <div>
      <Layout>
        <div className={classes.Wrapper}>
          <div className={classes.Container}>
            <div className={classes.FilterArea}>
              <input type="text" placeholder="Cari film.." value={title} onChange={(e) => setTitle(e.target.value)} />
              <button onClick={() => submitKeyword()}>Cari</button>
            </div>
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
    movies: state.MovieReducer.movies,
    page: state.MovieReducer.page
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInitialMovies: (payload) => dispatch(getAllMovies(payload)),
    getMoreMoviesHandler: (payload) => dispatch(getMoreMovies(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)