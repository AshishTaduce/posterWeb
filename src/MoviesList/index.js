import Poster from "../Poster"
import React from "react"
import './style.css';


class MoviesList extends React.Component{

    // fetchMovieJson(){
    //     let moviesList;
    //     fetch('https://gist.githubusercontent.com/McLarenCollege/bff99d586c33a1fc3f7b081227a501fe/raw/d6574b2104a3abe514e010df1719aadc17ee4c8c/movies_data.json')
    //     .then(response => response.json())
    //     .then((jsonData) => {
    //         console.log(jsonData)
    //         moviesList = jsonData;
    //     })
    //     .catch((error) => {
    //         console.error(error)
    //     });

    //     return moviesList
    // }

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
        let moviesList = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=a68598b6e3e81567486644082b967d8f&sort_by=revenue.desc');
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
            if(this.state.isLoading) return (
                <div className={'loading-page'}>
                    <div className="spinner"/>
                </div>
            );
            else{
                return (<div className = "movie-list">
                {this.state.movies}
                </div>)
            }
    }
}

export default MoviesList;


// https://api.themoviedb.org/3/discover/movie?api_key=a68598b6e3e81567486644082b967d8f&sort_by=revenue.desc