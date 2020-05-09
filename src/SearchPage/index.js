import './style.css'
import React from 'react';
import MoviesList from "../MoviesList";

export default class SearchPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
            query: '',
        }
    }

    changeQuery (e){
        let query = e.target.value;
        console.log(query);
        this.setState({
            searchQuery: query,
        })
    }

    searchMovies(){
        this.setState({
            query: this.state.searchQuery,
        })
    }

    render() {
        const api = `&api_key=a68598b6e3e81567486644082b967d8f`;
        let endpoint = `https://api.themoviedb.org/3/search/movie?query=${this.state.searchQuery}${api}`;

        return (
            <div className={'main-body'}>
                    <div >
                        <input className={'search-bar'}
                        autoFocus="autofocus"
                        type={'text'} title={'Search'}
                        aria-label={'Search'}
                        onChange={(e) => this.changeQuery(e)}/>
                        <button className={'search-button'}
                        onClick={() => this.searchMovies()}>
                            Search</button>
                    </div>

                <MoviesList key = {this.state.query} fromSearchPage = {true} movieUrl = {this.state.query.trim() === '' ? undefined : endpoint}/>
            </div>
        );
    }
}