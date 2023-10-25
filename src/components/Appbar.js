import { useState } from "react";
import Search from "./Search";
import useFetch from "../Hooks/useFetch";

const Appbar = ()=>{
  const [search,setSearch] = useState('')

  const [movie,setMovie] = useState([])
  const {movies,error} = useFetch(`https://api.themoviedb.org/3/search/movie?query=${search}`)
  const handleClick =()=>{

    setMovie(movies)
    // console.log(movies);
  }
  return(
    <>
    <form className=" d-flex container my-3">
      <input
      type="text"
      placeholder="Search For a movie"
      className="form-control w-75"
      
       
      

      onChange={(e)=>{
          setSearch(e.target.value)
      }}
      
      />
      <span className="btn mx-3 btn-primary" 
      id="" type="submit"
      onClick={handleClick}
      >
        <span className="d-none d-md-inline-flex">Search</span> &nbsp;
         <i className="bi bi-search"></i>

        </span>
    </form>

        <Search movies={movie} search={search} error={error} key={movie.id}/>
   
    </>
  )
}
export default Appbar;