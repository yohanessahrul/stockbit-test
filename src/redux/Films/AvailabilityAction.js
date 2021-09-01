import axios from "axios"

export const setMovies = (value) => {
  return {
    type: 'SET_MOVIES',
    payload: { data: value }
  }
}

export const addMoreMovies = (value) => {
  return {
    type: 'ADD_MORE_MOVIES',
    payload: { data: value }
  }
}

export const setSuggestionWord = (value) => {
  return {
    type: 'SET_SUGGESTION_WORDS',
    payload: { data: value }
  }
}

export const setDetailMovie = (value) => {
  return {
    type: 'SET_DETAIL_MOVIE',
    payload: { data: value }
  }
}

export const getAllMovies = (payload) => {
  return dispatch => {
    axios({
      method: 'get',
      url: `https://www.omdbapi.com/?apikey=faf7e5bb&s=${payload.title}&page=${payload.page}`
    })
      .then((response) => {
        let data = response.data.Search
        dispatch(setMovies(data))
      })
      .catch((err) => {
        // console.log(`err`, err)
      })
  }
}

export const getMoreMovies = (payload) => {
  return dispatch => {
    axios({
      method: 'get',
      url: `https://www.omdbapi.com/?apikey=faf7e5bb&s=${payload.title}&page=${payload.page}`
    })
      .then((response) => {
        let data = response.data.Search
        if (data) {
          dispatch(addMoreMovies(data))
        }
      })
      .catch((err) => {
        // console.log(`err`, err)
      })
  }
}

export const getSuggestionWord = (payload) => {
  return dispatch => {
    axios({
      method: 'get',
      url: `https://www.omdbapi.com/?apikey=faf7e5bb&s=${payload.keyword}&page=1`
    })
      .then((response) => {
        let data = response.data.Search
        dispatch(setSuggestionWord(data))
      })
      .catch((err) => {
        // console.log(`err`, err)
      })
  }
}

export const getDetailMovie = (payload) => {
  return dispatch => {
    axios({
      method: 'get',
      url: `https://www.omdbapi.com/?apikey=faf7e5bb&i=${payload.id}`
    })
      .then((response) => {
        let data = response.data
        console.log(`data`, data)
        dispatch(setDetailMovie(data))
      })
      .catch((err) => {
        // console.log(`err`, err)
      })
  }
}


