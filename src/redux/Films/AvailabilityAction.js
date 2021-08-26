import axios from "axios"

export const setMovies = (value) => {
  return {
    type: 'SET_MOVIES',
    payload: { data: value }
  }
}

export const getAllMovies = (payload) => {
  console.log(`payload`, payload)
  // const { title, year, page, plot } = payload
  // let t = title !== '' ? 't=' + title : null
  // let y = title !== '' ? 'y=' + year : null
  // let pages = page !== '' ? 'page=' + page : null
  // let plots = plot !== '' ? 'plot=' + plot : null
  return dispatch => {
    axios({
      method: 'get',
      url: 'http://www.omdbapi.com/?apikey=faf7e5bb&s=Batman'
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
