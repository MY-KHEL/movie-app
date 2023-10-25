import { Link } from "react-router-dom";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import HomeMaxIcon from '@mui/icons-material/HomeMax';
import SearchIcon from '@mui/icons-material/Search';
import WhatshotTwoToneIcon from '@mui/icons-material/WhatshotTwoTone';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import { useState } from "react";

const Navbar = () => {

  const [value, setValue] = useState('Home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return ( 
        <>
     <nav className="navbar navbar-expand-md p-0 " style={{'backgroundColor':'#CA5310'}}  >
  <div className="container-fluid ">
    <Link className="navbar-brand fw-semibold d-none d-md-block" to='/'  style={{'fontSize':'2rem'}}>Movie-Info<i className="bi bi-film"></i></Link>
    <div className="text-center d-block d-md-none mx-3">
    <Link className="navbar-brand fw-semibold " to='/'  style={{'fontSize':'2rem'}}>Movie-Info<i className="bi bi-film"></i></Link></div>
    <button className="navbar-toggler d-none " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-none d-md-block" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0 ">
       
        <li className="fw-semibold nav-item">
         <Link to='/search' className="  nav-link mx-2"> <i className="bi bi-search"></i> &nbsp;Search</Link>
        </li>
       
            <li className="fw-semibold nav-item">  <Link to='/top-rated' className="nav-link mx-2"><i className="bi bi-tv"></i> &nbsp; Top Rated</Link></li>
            <li className="fw-semibold nav-item"> <Link to='/trending' className="nav-link mx-2"><i className="bi bi-fire"></i> &nbsp; Trending</Link></li>
            <li className="fw-semibold nav-item"> <Link to='/upcoming' className="nav-link mx-2"><i className="bi bi-film"></i> &nbsp;Upcoming</Link></li>
        
       
      </ul>
     
    </div>
  </div>
</nav>
<BottomNavigation  sx={{ position: 'fixed', bottom: 0, left: 0, right: 0}}  value={value} onChange={handleChange} className="d-md-none  " style={{'backgroundColor':'#CA5310'}}>
      <Link to ='/'>
      <BottomNavigationAction
        label="Home"
        value="Home"
        icon={<HomeIcon />}
      /></Link>
      <Link to='/search'>
        <BottomNavigationAction
          label="Search"
          value="Search"
          icon={<SearchIcon />}
        /></Link>
        <Link to='/top-rated'>
      <BottomNavigationAction
        label="TopRated"
        value="TopRated"
        icon={<PlayArrowIcon />}
      /></Link>
      <Link to='/trending'>
      <BottomNavigationAction label="Trending" value="Tending" icon={<WhatshotTwoToneIcon />} /></Link>
      <Link to='/upcoming'>
      <BottomNavigationAction label="Upcoming" value="UpComing" icon={<HomeMaxIcon />} /></Link>
    </BottomNavigation>

    
        </>
         );
}



 
  


export default Navbar;