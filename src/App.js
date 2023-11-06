
import "bootstrap-icons/font/bootstrap-icons.css"

import Home from './components/Home';

import Appbar from './components/Appbar';
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Trending from './components/Trending';
import TopRated from './components/TopRated';
import UpComing from './components/upComing';

import './App.css';
import MovieDetails from "./components/MovieDetails";
function App() {
  
  return (
    <Router>
    <div className="App">
    <Navbar/>
      <Routes>
     <Route path='/' element ={<Home/>} />
     <Route path='/search' element ={<Appbar/>} />
     
     <Route path='/trending' element={<Trending/>}/>
     <Route path='/top-rated' element={<TopRated/>}/>
     <Route path='/upcoming' element={<UpComing/>}/>
     <Route path='/movie/:id' element={<MovieDetails/>}/>
      <Route path='*' element={<Home/>}/>

     </Routes>
   
    </div>
    </Router>
    
  );
}

export default App;
