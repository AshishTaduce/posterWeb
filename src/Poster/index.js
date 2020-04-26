import React from 'react';
import './style.css';
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom/";

class Poster extends React.Component {
    render() {
        let movie = this.props.movie;
        let posterUrl = 'http://image.tmdb.org/t/p/w185' + movie.poster_path;
        return (
        <Link to={
                {pathname:`/detailsPage/${movie.id}`, 
                state: {
                    movie: movie,
                }
            }
        }>
                    <div className='poster' style={{
                        backgroundImage: 'url(' + posterUrl + ')',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        overflow: 'hidden',
                    }}>
                        <div className='details'>
                            <h4 className='title'>
                                {movie.title}
                            </h4>
                            <div className='overview-rating'>
                                <p className= "overview">{(movie.overview).substring(0,200)}</p>
        
                                <div class='rating'>
                                    {movie.genre_ids[1]}
                                </div>
                            </div>
                        </div>
                    </div>                
            </Link>
        );
    }
}

export default Poster;