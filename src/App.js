import React from 'react';
import './App.css';
import Grid from'./Grid'
import DetailsPage from './DetailsPage'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SearchPage from "./SearchPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={"/detailsPage/:id/"} component = {DetailsPage} exact/>
        <Route path={"/search/"} component={SearchPage} exact/>
          <Route path={"/:pageNumber"} component = {Grid} exact={true}/>
          <Route path={"/"} component = {Grid} exact/>
      </Switch>
    </Router>
  );
}
export default App;