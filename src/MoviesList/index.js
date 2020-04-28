import Poster from "../Poster"
import React from "react"
import './style.css';
import {BrowserRouter as Router} from "react-router-dom/";

class MoviesList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading : true,
            movies : null,
        }

    }

    componentDidMount(){
        this.getPosters().then();
    }

    async getPosters() {
        setTimeout(function () {}, 3000);
        let mainPageLink = 'https://api.themoviedb.org/3/discover/movie?api_key=a68598b6e3e81567486644082b967d8f';
        console.log(this.props.movieUrl === null, this.props.movieUrl );
        let moviesList = await fetch((this.props.movieUrl === undefined || this.props.movieUrl === null) ? mainPageLink : this.props.movieUrl);
        moviesList = (await moviesList.json()).results;
        console.log(moviesList.length);
        let items = [];
        for(let i = 0; i < moviesList.length; i++){
            console.log(moviesList[i].title);
            items.push(<Poster
                posterurl = {'http://image.tmdb.org/t/p/w185' + moviesList[i].poster_path}
                title = {moviesList[i].title}
                genre = {moviesList[i].genres}
                rating = {moviesList[i].genre_ids[1]}
                overview = {moviesList[i].overview}
                movie = {moviesList[i]}
                />);
        }
        this.setState({
            isLoading: false,
            movies: items,
        });
    }

    render (){
        if(this.props.movieUrl === undefined && this.props.fromSearchPage){
            return <div className={'search-something'}>Search Something</div>
        }

            else if(this.state.isLoading) {
                return (
                <div  className={'loading-page'}>
                    <div className="spinner"/>
                </div>
            );
            }
        else if(this.state.movies.length === 0) return <div className={'search-something'}>Nothing found</div>;

        else{
                return (
                    <Router>
                        <div className = "movie-list">
                            {this.state.movies}
                        </div>
                    </Router>

                )
            }
    }
}

export default MoviesList;


// https://api.themoviedb.org/3/discover/movie?api_key=a68598b6e3e81567486644082b967d8f&sort_by=revenue.desc