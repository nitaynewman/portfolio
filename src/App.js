import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SpinnerFullPage from './components/SpinnerFullPage';
import AdminAddProject from './Admin';
const Home = lazy(() => import('./Home/Home'));
const Python = lazy(() => import('./python/pyHome'));
const JavaScript = lazy(() => import('./Java-Script/JavaScript'));
const ReactPage = lazy(() => import('./React/React'));
const Contact = lazy(() => import('./contact/contact'));
const NotFound = lazy(() => import('./not_found'));

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<SpinnerFullPage />}>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/Python'>
            <Python />
          </Route>
          <Route exact path='/Js'>
            <JavaScript />
          </Route>
          <Route exact path='/React'>
            <ReactPage />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route exact path='/admin'>
            <AdminAddProject />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
