import React  from 'react';
import MovieCard from './Moviecard';
// import Appbar from './Appbar';
import useFetch from '../Hooks/useFetch';
import { Link } from 'react-router-dom';

function Home(){
const {movies,error,isLoading} = useFetch('https://api.themoviedb.org/3/movie/now_playing')



const renderMovies = () =>(
   
   movies.map(movie => (
       <>
          <MovieCard movie={movie} key={movie.id}/> 
       </>
    ))
   
)

return(
  <>
  <div className="container-fluid home-bg ">
    <div className='cover'>
    <div className='row px-md-5 mb-3 '>
    <div className='col-md-11 col-12 mt-4'>
      <h1><span className='text-text '>MOVIEINFO</span>  </h1>
      <p className='text-subtext '>The Place to get information about any movie.</p>
      <p className='text-subtext'>The website was built in Partner with Tmdb movies Org.</p>
      <p className='fw-6'>Developed by <a href='https://github.com/MY-KHEL'>mykhel</a></p>
      
      <Link to='/search'>
      <button className='btn rounded' style={{'backgroundColor':'#ffb20f'}}>Search Now</button>
      </Link>
    </div>
    </div>
</div>
  </div>
<div className='container'>
  <p className='text-subtext mt-3'>Check Out The Top Playing Movies in the World and their ratings below.</p>
  <div className="row g-4 text-center">
  {isLoading && <p>Please wait as your request is been loaded.....</p>}

  {error && <p style={{'fontSize':'1.3rem'}}>{error}</p>}
              {renderMovies()}
    
    </div>
  
</div>
      </>
)

}

export default Home;