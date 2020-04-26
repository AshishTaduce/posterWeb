import React from "react";
import './style.css';

export default class DetailsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movie: undefined,
        }
    }

    componentDidMount = async () => {
        let id = this.props.match.params.id;
        let movie;
        let a = await fetch("https://api.themoviedb.org/3/movie/" + id + "?api_key=a68598b6e3e81567486644082b967d8f");
        movie = (await a.json());
        this.setState({
            movie: movie,
        });
        console.log('MovieData: ', movie);
    };

    render() {
        return this.state.movie === undefined ?
            <div>Loading...</div> :
            <div className='main-boy'
                 style={{
                     backgroundImage: `url(https://image.tmdb.org/t/p/original${this.state.movie.backdrop_path})`
                 }}>
                <div className={'detail-content'}>
                    <img src={'http://image.tmdb.org/t/p/w185' + this.state.movie.poster_path} alt=""
                         className={'poster-detail'}/>
                    <div className={'details-overview'}>
                        <div className={'detail-title'}>
                            {this.state.movie.title}
                        </div>
                        <div className={'detail-tagline'}>
                            {this.state.movie.tagline}
                        </div>
                        <div className={'detail-overview'}>
                            {this.state.movie.overview}
                        </div>

                    </div>
                </div>
            </div>
    }
}