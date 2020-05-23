import Poster from "../Poster"
import React, {useEffect, useState} from "react"
import './style.css';
import {Link} from "react-router-dom";

function MovieList(props) {
    let [isLoading, setLoading] = useState(true);
    let [movies, setMovies] = useState([]);

    function getPageNumber() {
        return props.match?.params?.pageNumber;
    }

    useEffect(() => {
        getPosters().then();
    }, [props.match?.params?.pageNumber])

    async function getPosters() {
        setLoading(true);
        setMovies(undefined);
        let mainPageLink = 'https://api.themoviedb.org/3/discover/movie?api_key=a68598b6e3e81567486644082b967d8f&page='+getPageNumber();
        console.log(props.movieUrl ,'Is the movie url');
        let moviesList = await fetch((props.movieUrl === undefined || props.movieUrl === null) ? mainPageLink : props.movieUrl);
        moviesList = (await moviesList.json()).results;
        let items = [];
        for(let i = 0; i < moviesList.length; i++){
            items.push(<Poster
                posterurl = {'http://image.tmdb.org/t/p/w185' + moviesList[i].poster_path}
                title = {moviesList[i].title}
                rating = {moviesList[i].genre_ids[1]}
                overview = {moviesList[i].overview}
                movie = {moviesList[i]}
                />);
        }
        console.log(items);
        setLoading(false);
        setMovies(items);
    }

    if(props.movieUrl === undefined && props.fromSearchPage){
        return <div className={'search-something'}>Search Something</div>
    }

    else if(isLoading || !movies) {
        return (
            <div  className={'loading-page'}>
                <div className="spinner"/>
            </div>
        );
    }

    else if(movies.length === 0) return <div className={'search-something'}>Nothing found</div>;

    else{
        return (
            <div className={'main-column'}>
                <div className = "movie-list">
                    {movies}
                </div>
                <div className={'page-button'}>
                    {Number(getPageNumber()) > 1 ?
                        <Link to={'/'+((Number(getPageNumber())) - 1)} >
                            Previous
                        </Link> : null}
                    <Link to={'/'+((Number(getPageNumber()) || 1) + 1)}>
                        Next
                    </Link>
                </div>
            </div>
        )
    }
}

export default (MovieList);


// https://api.themoviedb.org/3/discover/movie?api_key=a68598b6e3e81567486644082b967d8f&sort_by=revenue.desc