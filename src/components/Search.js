

import MovieCard from "./Moviecard";

const Search = ({movies,search,error}) => {
    

    const renderMovies = () =>(
        movies.map(movie => (
           <>
              <MovieCard movie={movie} key={movie.id}/> 
           </>
        ))
        )

return ( 


    
        <>
        <div className="container">

   

        <div className="row g-2">
        {error && <p>{error}</p>}
              {renderMovies()}
    
        </div>

        </div>
        </>
     );
}
 
export default Search;