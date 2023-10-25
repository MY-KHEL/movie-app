
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import YouTube from "react-youtube";
import useTrailer from "../Hooks/useTrailer";

import './MovieDetails.css'

import useFetch from '../Hooks/useFetch';

const MovieDetails = () => {
    const { id } = useParams()
   

    
    const IMAGE_LINK = 'https://image.tmdb.org/t/p/w780'
    
    const [offTrailer,setOffTrailer]= useState([])
    const [normTrailer,setNormTrailer]= useState([])
    const [falseTrailer,setFalseTrailer]= useState([])
    const [movCast,setMovCast]= useState([])
    const cast = useFetch(`https://api.themoviedb.org/3/movie/${id}/credits`)
    const {movieList ,trailer , error, isLoading}= useTrailer('https://api.themoviedb.org/3/movie/' + id)
   
    useEffect(()=>{

      
      setMovCast(cast['movieList']['cast'])
      console.log(movCast)
     
       setNormTrailer(trailer.find(vid => vid.official === true))
       setFalseTrailer(trailer.find(vid => vid.official === false))
       setOffTrailer(trailer.find(vid => vid.name === 'Official Trailer') )
   
   

      // eslint-disable-next-line
    },[movieList])
  
 
    return (
         <>
       

        <div className="container p-0 mt-3 mb-5 ">
        {isLoading && <p>Please wait as your request is been loaded.....</p>}

      {error ? <p>{error}</p> :

         movieList &&
        <div className="row " key={movieList.id}>
          <div className="col-12 col-md-6 " >
              <div className="mx-auto">
                 <img src={`${IMAGE_LINK}${movieList.backdrop_path}` } alt="pictures" className="w-100 mx-auto"/>
                 </div>
                 {movieList.genres && movieList.genres.map(genre => 

                    <span class="badge bg-sec p-2 m-2 text-black"  key={genre.id}>{genre.name}</span>
                    )}
                 
               
                  <p className="mt-3 fw-semibold px-2">Title : {movieList.title}</p>
               
                  <h3 className="mt-3 px-2">Overview :</h3>
                 <p className="fs-6 px-2  fw-normal">{movieList.overview}</p>
          </div>
          <div className="col-md-6 col-12 px-4 ">
                  <p>Watch The Trailer</p>
                  {trailer && 
                  offTrailer ?
                  <YouTube videoId={offTrailer?.key}/> :
                  <YouTube videoId={normTrailer ?normTrailer?.key :falseTrailer?.key}/>
                  }
                  <p className='fs-5 fw-semibold mt-2' >Below are the cast of {movieList.title}</p>
                  <div className='cast-container'>
                     { movCast?.map((people)=>{
                        return(
                           <div className='row'>
                           
                           <div className=' cast-box col p-0 rounded' >
                        <img src={`https://image.tmdb.org/t/p/w780${people['profile_path']}`} alt='NOT FOUND' className='w-100 m-0 p-0 rounded-top'/>

                        <p className='text-center fw-semibold'>{people.name}</p>
                           </div>
                           </div>
                        )
                     })}
                    
        
                  </div>
                  <div>
                     
                    <p>Released date : {movieList.release_date}</p>

                    <div className='mb-5'>
                      <>Production Companies : </>
                          {movieList.production_companies && movieList.production_companies.map(company => 

                       <span className="badge bg-sec text-black p-2 m-2"  key={company.id}> {company.name} </span>
                        )}
                     </div>

                  </div>
          </div>
        </div>
            } 
         </div>
       
         </> 
             );
}
 
export default MovieDetails;
