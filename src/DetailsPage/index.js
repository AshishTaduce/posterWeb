import React from "react";
import './style.css';

export default class DetailsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: undefined,
            trailer_data: undefined,
        }
    }

    componentDidMount = async () => {
        let id = this.props.match.params.id;
        let movie;
        let a = await fetch("https://api.themoviedb.org/3/movie/" + id + "?api_key=a68598b6e3e81567486644082b967d8f&append_to_response=videos");
        movie = (await a.json());
        this.setState({
            movie: movie,

        });
        console.log('MovieData: ', movie);
    };


    render() {
        if(!this.state.movie) return <div>Loading...</div>
        else {
            console.log('MovieData: ', this.state.movie);
            let trailers_data = this.state.movie.videos.results.filter(videoLink => videoLink.type === 'Trailer');
            let clips_data = this.state.movie.videos.results.filter(videoLink => videoLink.type !== 'Trailer');
                return <div className='main-boy'
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
                        <div className={'detail-buttons'}>
                            {trailers_data.map((trailer, index) => <button className={'video-button'}
                                onClick={() => window.open('https://www.youtube.com/watch?v='+trailer.key, "_blank")}>Watch
                                Trailer #{index + 1}</button>)}
                            {clips_data.map((trailer, index) => <button className={'video-button'}
                                onClick={() => window.open('https://www.youtube.com/watch?v='+trailer.key, "_blank")}>Watch
                                Clip #{index + 1}</button>)}

                        </div>
                    </div>
                </div>
            </div>
        }
    }
}