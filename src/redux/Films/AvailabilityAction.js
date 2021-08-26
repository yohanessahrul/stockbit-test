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

export const getAllMovies = (payload) => {
  return dispatch => {
    axios({
      method: 'get',
      url: `http://www.omdbapi.com/?apikey=faf7e5bb&s=${payload.title}&page=${payload.page}`
    })
      .then((response) => {
        dispatch(setMovies(response.data.Search))
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
      url: `http://www.omdbapi.com/?apikey=faf7e5bb&s=${payload.title}&page=${payload.page}`
    })
      .then((response) => {
        dispatch(addMoreMovies(response.data.Search))
      })
      .catch((err) => {
        // console.log(`err`, err)
      })
  }
}


