import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SpinnerFullPage from './components/SpinnerFullPage';
// import Home from './Home/Home';
// import Python from './python/pyHome';
// import JavaScript from './Java-Script/JavaScript';
// import ReactPage from './React/React';
// import Contact from './contact/contact';
// import ToDoList from './projects/todolist/ToDoList';
// import PigGame from './projects/pigGame/PigGame';
// import Calc from './projects/calc/Calc';
// import Popcorn from './projects/popcorn/popcorn';
// import GuessNum from './projects/guessNum/guessNum';
// import NotFound from './not_found';
const Home = lazy(() => import('./Home/Home'));
const Python = lazy(() => import('./python/pyHome'));
const JavaScript = lazy(() => import('./Java-Script/JavaScript'));
const ReactPage = lazy(() => import('./React/React'));
const Contact = lazy(() => import('./contact/contact'));
const ToDoList = lazy(() => import('./projects/todolist/ToDoList'));
const PigGame = lazy(() => import('./projects/pigGame/PigGame'));
const Calc = lazy(() => import('./projects/calc/Calc'));
const Popcorn = lazy(() => import('./projects/popcorn/popcorn'));
const GuessNum = lazy(() => import('./projects/guessNum/guessNum'));
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
          <Route exact path='/projects/packing-agent'>
            <ToDoList />
          </Route>
          <Route exact path='/projects/pig-game'>
            <PigGame />
          </Route>
          <Route exact path='/projects/calc'>
            <Calc />
          </Route>
          <Route exact path='/projects/popcoren-time'>
            <Popcorn />
          </Route>
          <Route exact path='/projects/guess-num'>
            <GuessNum />
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
