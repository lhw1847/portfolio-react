import React from 'react'
function MovietubeItem(props){
  console.log(props.video)

  const rendering = () => {
    const result = [];
    for (let i = 0; i < props.video.length; i++) {
      const joinText = props.video[i].original_title.split(" ").join("-");
      result.push(
          <li key={props.video.id}>
            <a href={`https://www.themoviedb.org/movie/${props.video[i].id}-${joinText}?language=ko`}>
            <img src={`https://image.tmdb.org/t/p/w500/${props.video[i].poster_path}`} alt={props.video[i].title} />
            </a>
            <p className="title">{props.video[i].title}</p>
          </li>
        
      );
    }
    return result;
  };

  return rendering();
}


function MovieList(props) {
    console.log(props.videos)
  return (
            <div className="movie__list">
        <ul>
            <MovietubeItem video={props.videos} />
        </ul>
    </div>
  )
}

export default MovieList;