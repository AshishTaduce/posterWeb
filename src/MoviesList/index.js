import Poster from "../Poster"
import React from "react"
import './style.css';

class MoviesList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currPage: Number(window.sessionStorage.getItem('currPage')) + 1 || 1,
            isLoading : true,
            movies : null,
        }

    }

    componentDidMount(){
        window.sessionStorage.setItem('currPage',window.sessionStorage.getItem('currPage') || '1');
        this.getPosters().then();
    }

    async getPosters() {
        console.log(window.sessionStorage.getItem('currPage'), this.state.currPage, 'MMMMMMM');
        this.setState({
            isLoading: true,
            movies: undefined,
        });
        setTimeout(function () {}, 3000);
        let mainPageLink = 'https://api.themoviedb.org/3/discover/movie?api_key=a68598b6e3e81567486644082b967d8f&page=' + (window.sessionStorage.getItem('currPage'));
        console.log(this.props.movieUrl === null, this.props.movieUrl );
        let moviesList = await fetch((this.props.movieUrl === undefined || this.props.movieUrl === null) ? mainPageLink : this.props.movieUrl);
        moviesList = (await moviesList.json()).results;
        console.log(moviesList.length);
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
                        <div className={'main-column'}>
                            <div className = "movie-list">
                                {this.state.movies}
                            </div>
                            <div className={'page-button'} hidden={Number(window.sessionStorage.getItem('currPage')) <= 1}>
                                {Number(window.sessionStorage.getItem('currPage')) > 1 ? <button onClick={() => {
                                    window.sessionStorage.setItem('currPage', (Number(window.sessionStorage.getItem('currPage')) - 1).toString());
                                    window.history.pushState("main page", "Movies", "/page#" + window.sessionStorage.getItem('currPage'));
                                    this.getPosters();
                                }}>
                                    Previous
                                </button> : null}
                                <button onClick={() => {
                                    window.sessionStorage.setItem('currPage', (Number(window.sessionStorage.getItem('currPage')) + 1).toString());
                                    window.history.pushState("main page", "Movies", "/page#"+window.sessionStorage.getItem('currPage'));
                                    this.getPosters();
                                }}>
                                    Next</button>
                            </div>
                        </div>
                )
            }
    }
}

export default (MoviesList);


// https://api.themoviedb.org/3/discover/movie?api_key=a68598b6e3e81567486644082b967d8f&sort_by=revenue.desc