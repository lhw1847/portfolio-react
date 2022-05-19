import React from 'react';
import MovieList from "../includes/MovieList";
import MovieSearch from "../includes/MovieSearch";

function MovieCont(props) {
    console.log(props)
  return (
    <section className="movie__cont">
        <div className="container">
            <div className="movie__inner">
                <MovieSearch onSearch={props.search} />
                <MovieList videos={props.videos}/>
            </div>
        </div>
    </section>
  )
}

export default MovieCont;