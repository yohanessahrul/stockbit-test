import HomeContainer from './containers/Home/Home'
import DetailContainer from './containers/Detail/Detail'

const routes = [
  {
    path: '/',
    component: HomeContainer,
    exact: true
  },
  {
    path: '/detail/:slug',
    component: DetailContainer,
    exact: true
  },

]

export default routes