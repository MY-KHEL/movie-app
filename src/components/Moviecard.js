import React from 'react';
import { Link } from 'react-router-dom';



const IMAGE_PATH = 'https://image.tmdb.org/t/p/w780/'

const MovieCard = ({movie})=>{

    return(
        <>
        
          <div className=' col-md-3  g-4 mb-5 pb-3 col-sm-4 col-6 position-relative' key={movie.id}>
        <Link to={`/movie/${movie.id}`}>
       { movie.poster_path ? <img src={`${IMAGE_PATH}/${movie.poster_path}`} alt={`${movie.title} poster`} className='w-100 rounded shadow'/>: <img src='/not_found.jpeg' alt=' not found'/> }
        <span className="position-absolute top-0 end-0 z-3 translate-middle badge rounded-pill bg-danger">
            {Math.round(movie.vote_average * 10)}%
     <span className="visually-hidden">Movie rating</span>
         </span>
        
           <h5 className='mt-3'> {movie.title}</h5>
           </Link>

          
            </div> 
           
       
       </>
    )
}

export default MovieCard;