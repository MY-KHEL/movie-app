import useFetch from "../Hooks/useFetch";
import MovieCard from "./Moviecard";

const TopRated = () => {

    const {movies,error,isLoading} = useFetch('https://api.themoviedb.org/3/movie/top_rated')

    console.log(movies);

    
    const renderMovies = () =>(
        movies.map(movie => (
           <>
              <MovieCard
               movie={movie} 
               key={movie.id}
              /> 
           </>
        ))
        )
    
    return (
        <div className="container text-center">
  
        <div className="row g-4">
        <h2>Top Rated Videos</h2>
        {isLoading && <p>Please wait as your request is been loaded.....</p>}

        {error && <p>{error}</p>}
              {renderMovies()}
          
          </div>
      </div>
     );
}
 
export default TopRated;