import GetMovies from './components/GetMovies';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import MovieDetails from './components/MovieDetails'
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div>
       <Navbar/>
         <BrowserRouter>
      <Routes> 
      <Route path='/home' element={<GetMovies/>}/>
<Route path='/MovieDetails/:movie_id' element={<MovieDetails/>}/> 
       </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;


