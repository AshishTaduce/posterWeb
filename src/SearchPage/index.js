import './style.css'
import React from 'react';
import MoviesList from "../MoviesList";

export default class SearchPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
        }
    }

    changeQuery (e){
        let query = e.target.value;
        console.log(query);
        this.setState({
            searchQuery: query,
        })
    }

    render() {
        const api = `&api_key=a68598b6e3e81567486644082b967d8f`;
        let endpoint = `https://api.themoviedb.org/3/search/movie?query=${this.state.searchQuery}${api}`;

        return (
            <div className={'main-body'}>
                    <input
                        autoFocus="autofocus"
                        className={'search-bar'}
                        type={'text'} title={'Search'}
                        aria-label={'Search'}
                        onChange={(e) => this.changeQuery(e)}/>

                <MoviesList key = {this.state.searchQuery} fromSearchPage = {true} movieUrl = {this.state.searchQuery.trim() === '' ? undefined : endpoint}/>
            </div>
        );
    }
}