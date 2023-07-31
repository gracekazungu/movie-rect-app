import React, { useState, useEffect } from 'react';
import { getMovies } from '../../utils/utilities';
import './style.css';
import ImageContainer from '../../atoms/ImageContainer';
// import { Link } from 'react-router-dom';
const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;
const GetMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  useEffect(() => {
    (async () => {
      setLoading(true);
      const movies = await getMovies();
      console.log({ movies });
      setLoading(false);
      setMovies(movies.results);
    })();
  }, []);
  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };
  const closeModal = () => {
    setSelectedMovie(null);
  };
  if (loading) {
    return <h1>Loading movies...</h1>;
  }
  return (
    <div className="container">
      {movies &&
        !loading &&
        movies.length > 0 &&
        movies.map((item) => (

          <div key={item.id} onClick={() => handleMovieClick(item)}>
            <ImageContainer props={item} />
          </div>
        ))}
      {movies && !loading && movies.length === 0 && <h1>No movies</h1>}
      {selectedMovie && (
        <div className="single-movie">
          <div className="single-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <img
              src={`${IMAGE_BASE_URL}${selectedMovie.poster_path}`}
              alt={selectedMovie.title}
            />
            <h2>{selectedMovie.title}</h2>
            <p>{selectedMovie.overview}</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default GetMovies;


















// import React, { useState, useEffect } from "react"
// import { getMovies } from "../../utils/utilities"
// import ImageContainer from "../../atoms/ImageContainer";
// import './style.css'
// import { Link } from 'react-router-dom';


// const GetMovies =()=>{
//     const [movies, setMovies]=useState([]);
//     const [loading,setLoading]=useState(false)
//     useEffect(()=>{
//         (async()=>{
//             setLoading(true)
//             const movies= await getMovies();
//             console.log({movies});
//             setLoading(false)
//             setMovies(movies.results);
//         })();
//     },[]);

//     if(loading){
//         return <h1>Loading movies...</h1>
//     };

//     return(
//         <div className="container">
//             {movies && !loading && movies.length >0 && movies.map((item)=>(
                
             
//           <ImageContainer props={item} />
   // <div key={item.id}>
          /* Add the "View details" link here */
          /* <Link to={`/MovieDetails/${item.id}`} className="button">
            <button type="submit" className="button">View details</button>
          </Link>
        </div> */

//             ))};

//             {movies && !loading && movies.length === 0 && (<h1>No movies found</h1>)}
//         </div>
//     );
// };
// export default GetMovies

