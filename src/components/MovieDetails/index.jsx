import ImageContainer from "../../atoms/ImageContainer";
import React, { useState} from "react";
const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;
const MovieDetails=() => {
const [search]=useState[null]
const[movies]=useState[null]
const[loading]=useState[null]
  const [selectedMovie, setSelectedMovie] = useState(null);
  const filterMovies = movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()));
  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };
  return (
    <div className="movie-list-container">
      <div className="image-container">
        {loading === false && movies.length > 0 && filterMovies.map(item => (
          <div key={item.id} onClick={() => handleMovieClick(item)}>
            <ImageContainer props={item} />

            <div>
      <h1>Movie Details</h1>
             <div className='movies'>
      <img src={`https://image.tmdb.org/t/p/w500 ${item.poster_path}`} alt={item.title} />
     <h2>{item.title}</h2>
      <p>{item.overview}</p>
    <p>Release Date: {item.release_date}</p>
    </div>
 </div>
          </div>
          
        ))}
      </div>
      {selectedMovie && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedMovie(null)}>&times;</span>
            <img src={`${IMAGE_BASE_URL}${selectedMovie.poster_path}`} alt={selectedMovie.title} />
            <h2>{selectedMovie.title}</h2>
            <p>{selectedMovie.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
export default MovieDetails;




















// import React, { useEffect, useState } from 'react';

// import { useParams } from 'react-router-dom';

// const MovieDetails = () => {
//   const {movie_id} = useParams();
//   const [movie, setMovies] = useState(null);
//   useEffect(() => {
//     const details = async () => {
//       try {
//         const response = await fetch(`https://api.themoviedb.org/3/movie/{movie_id}`);
//         const data = await response.json();
//         setMovies(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     details();
//   }, [movie_id]);
//   if (!movie) {
//     return <p>Loading ...</p>;
//   }
//   return (
//     <div>
//       <h1>Movie Details</h1>
//       <div className='movies'>
//       <img src={`https://image.tmdb.org/t/p/w500 ${movie.poster_path}`} alt={movie.title} />
//       <h2>{movie.title}</h2>
//       <p>{movie.overview}</p>
//       <p>Release Date: {movie.release_date}</p>
//       </div>
//     </div>
//   );
// };
// export default MovieDetails;







