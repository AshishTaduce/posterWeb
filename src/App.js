import React from 'react';
import './App.css';
import Grid from'./Grid'
import DetailsPage from './DetailsPage'
import {BrowserRouter as Router} from "react-router-dom";
import {Switch , Route} from "react-router";
import SearchPage from "./SearchPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={"/detailsPage/:id"} component = {DetailsPage} />
        <Route path={"/search"} component={SearchPage} />
        <Route path={"/"} component = {Grid} />
      </Switch>

    </Router>
  );
}
export default App;