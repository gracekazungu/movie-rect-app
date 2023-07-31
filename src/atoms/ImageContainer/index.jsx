import React from "react"
import'./style.css'
import { Link } from 'react-router-dom';

const IMAGE_BASE_URL=process.env.REACT_APP_IMAGE_BASE_URL

const ImageContainer=({props})=>{
    return (
        
    <div className="image-container">
      {/* <Link to={`/MovieDetails/${props.id}` }className="details">  */}
      <img src={`${IMAGE_BASE_URL}${props.poster_path}`}alt={props.title} />
      {/* </Link> */}
      
    </div>
    )
};

export default ImageContainer
