import React from "react";
// import Square from "../Square";
import MoviesList from "../MoviesList"

class Grid extends React.Component {

    render() {
        return (
            <div className={'main-body'}>
                <div className={'search-bar'} onClick={}/>
                <MoviesList/>
            </div>
        );
    }
}

export default Grid;