import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from './routes'
import classes from './App.module.scss'

function App() {

  const routeList = routes.map((route, routeKey) => {
    return (
      <Route
        key={routeKey}
        path={route.path}
        component={route.component}
        exact={route.exact || false}>
      </Route>
    )
  })

  return (
    <div className="App">
      <div className={classes.Wraper}>

        <Router>
          {routeList}
        </Router>
      </div>
    </div>
  );
}


export default App
