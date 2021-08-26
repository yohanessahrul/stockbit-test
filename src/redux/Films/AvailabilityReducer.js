const initialState = {
  movies: [],
  isFetchFilms: false,
  isErrorFetchFilms: false
}

const setFilms = (state, action) => {
  return ({...state}, {movies: action.payload.data})
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MOVIES': return setFilms(state, action)
    default: return state
  }
}

export default reducer