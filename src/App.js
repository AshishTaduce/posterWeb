import React from 'react';
import './App.css';
import Grid from'./Grid'
import DetailsPage from './DetailsPage'
// import GameBoard from './GameBoard';
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom/";
import SearchPage from "./SearchPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={`/`} component = {Grid} exact = {true}/>
        <Route path={`/detailsPage/:id`} component = {DetailsPage} exact = {true}/>
        <Route path={`/search/`} component={SearchPage} exact={true}/>
      </Switch>

    </Router>
  );
}
export default App;