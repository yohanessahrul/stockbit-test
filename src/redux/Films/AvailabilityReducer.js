const initialState = {
  movies: [],
  page: 1,
  isFetchFilms: false,
  isErrorFetchFilms: false
}

const setFilms = (state, action) => {
  return ({ ...state }, { movies: action.payload.data, page: 2})
}

const addMoreMovies = (state, action) => {
  let movies = state.movies
  let length = (movies.concat(action.payload.data).length / 10) + 1
  console.log(`length`, length)
  // return ()
  return (
    {...state},
    {movies: movies.concat(action.payload.data), page: length}
  )
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MOVIES': return setFilms(state, action)
    case 'ADD_MORE_MOVIES': return addMoreMovies(state, action)
    default: return state
  }
}

export default reducer