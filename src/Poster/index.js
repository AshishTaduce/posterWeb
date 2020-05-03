import React from 'react';
import './style.css';
import {Link} from "react-router-dom";

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
            }
                  style={{ textDecoration: 'none', margin: '8px 16px' }}
            >
                <div className='poster'
                     style={{
                    backgroundImage: 'url(' + posterUrl + ')',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    overflow: 'hidden',
                }}>
                    <div className='details'>
                        <h4 className='title'>
                            {processTitle(movie.title)}
                        </h4>
                        <div className='overview-rating'>
                            <p className= "overview">{processDetails(movie.overview)}</p>

                            <div className='rating'>
                                {movie.vote_average}
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }
}

function processDetails(string){
    return `${(string.length > 100) ? string.substring(0,100) + '...' : string}\nRead More`;
}

function processTitle(string){
    return `${(string.length > 45) ? string.substring(0,45) + '...' : string}`;
}

export default (Poster);