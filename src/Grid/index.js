import React from "react";
import MoviesList from "../MoviesList"
import {Link} from "react-router-dom";

class Grid extends React.Component {

    render() {
        return (
                <div className={'main-body'}>
                        <Link to={`/search`} className={'search-bar'}>
                            Search
                        </Link>
                        <MoviesList fromSearchPage = {false}/>
                </div>
        );
    }
}

export default Grid;