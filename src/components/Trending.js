import useFetch from "../Hooks/useFetch";
import MovieCard from "./Moviecard";

const Trending = () => {

    const {movies,error,isLoading} = useFetch('https://api.themoviedb.org/3/movie/popular')

    console.log(movies);

    
    const renderMovies = () =>(
        movies.map(movie => (
           <>
              <MovieCard movie={movie} key={movie.id}/> 
           </>
        ))
        )
    
    return (
        <div className="container text-center">
            <h2 className="mb-4">Trending Videos</h2>
            {isLoading && <p>Please wait as your request is been loaded.....</p>}
        <div className="row g-4">
        {error && <p>{error}</p>}
              {renderMovies()}
          
          </div>
      </div>
     );
}
 
export default Trending;