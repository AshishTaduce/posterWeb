import React from "react";
// import Square from "../Square";
import MoviesList from "../MoviesList"
import {Link, BrowserRouter as Router} from "react-router-dom";

class Grid extends React.Component {

    render() {
        return (
            <Router>
                <div className={'main-body'}>

                        <Link to={{pathname:`/search`,}} className={'search-bar'}
                              // onClick={window.location.reload.bind(window.location)}
                        >
                            Search
                        </Link>

                    <MoviesList fromSearchPage = {false}/>
                </div>
            </Router>
        );
    }
}

export default Grid;