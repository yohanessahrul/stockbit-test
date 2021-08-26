const initialState = {
  movies: [],
  suggestionWords: [],
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
  return (
    {...state},
    {movies: movies.concat(action.payload.data), page: length}
  )
}

const setSuggestionWords = (state, action) => {
  console.log(`data`, action.payload.data)
  return ({...state}, {suggestionWords: action.payload.data})
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MOVIES': return setFilms(state, action)
    case 'ADD_MORE_MOVIES': return addMoreMovies(state, action)
    case 'SET_SUGGESTION_WORDS': return setSuggestionWords(state, action)
    default: return state
  }
}

export default reducer