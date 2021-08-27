import React, { useState, useEffect } from 'react'
import Layout from '../../components/partials/Layout/Layout'
import { getAllMovies, getMoreMovies, getSuggestionWord } from '../../redux/Films/AvailabilityAction'
import classes from './Home.module.scss'
import { connect } from 'react-redux'
import Backdrop from '../../components/shared/Backdrop/Backdrop'
import Suggestion from '../../components/shared/Suggestion/Suggestion'
import Detail from '../../components/shared/Detail/Detail'

function Home(props) {
  const [title, setTitle] = useState('batman')
  const [isActiveBackdrop, setIsActiveBackdrop] = useState(false)
  const [isActiveSuggestion, setisActiveSuggestion] = useState(false)
  const [isActiveDetail, setIsActiveDetail] = useState(false)
  const [detailData, setDetailData] = useState(null)

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

  const onChangeHandler = (e) => {
    setIsActiveBackdrop(true)
    setisActiveSuggestion(true)
    setTitle(e.target.value)
  }

  const onKeyUpHandler = () => {
    props.getSuggestionWord({keyword: title})
  }

  const changeTitleFromSuggestionHandler = (value) => {
    setTitle(value)
    setIsActiveBackdrop(false)
    setisActiveSuggestion(false)
    props.onInitialMovies({ title: value, page: 1 })

  }

  const clickedBackdrop = () => {
    setIsActiveBackdrop(false)
    setisActiveSuggestion(false)
    setIsActiveDetail(false)
    document.body.style.overflow = 'auto';
  }

  const setDetailDataHandler = (data) => {
    setIsActiveBackdrop(true)
    setIsActiveDetail(true)
    setDetailData(data)
    document.body.style.overflow = 'hidden';
  }
  
  let movieList = null
  if (props.movies && props.movies.length > 0) {
    movieList = props.movies.map((movie, movieKey) => {
      return (
        <div className={classes.Item} key={movieKey}>
          <div className={classes.Label}>{movie.Type}</div>
          <div className={classes.Left}>
            <div className={classes.Image} onClick={() => setDetailDataHandler(movie)}>
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
        <Detail isActiveDetail={isActiveDetail} detailData={detailData} clickedBackdrop={() => clickedBackdrop()}/>
        <Backdrop isActiveBackdrop={isActiveBackdrop} clickedBackdrop={() => clickedBackdrop()}/>
        <div className={classes.Wrapper}>
          <div className={classes.Container}>
            <div className={classes.FilterArea}>
              <input  
                style={(isActiveDetail) ? {zIndex: '90'} : null}
                type="text"
                placeholder="Cari film.."
                value={title}
                onChange={(e) => onChangeHandler(e)}
                onKeyUp={() => onKeyUpHandler()}/>
              <button onClick={() => submitKeyword()}>Cari</button>
              <Suggestion
                isActiveSuggestion={isActiveSuggestion}
                suggestions={props.suggestionWords}
                clickedToChangeTitle={(value) => changeTitleFromSuggestionHandler(value)}/>
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
    page: state.MovieReducer.page,
    suggestionWords: state.MovieReducer.suggestionWords
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInitialMovies: (payload) => dispatch(getAllMovies(payload)),
    getMoreMoviesHandler: (payload) => dispatch(getMoreMovies(payload)),
    getSuggestionWord: (payload) => dispatch(getSuggestionWord(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)