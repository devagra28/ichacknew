import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import './App.css';
import Sponsor from './pages/Sponsor';
import Team from './pages/Team';
import Track from './pages/Track';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/sponsor' element={<Sponsor/>} />
          <Route path='/team' element={<Team/>} />
          <Route path='/track' element={<Track />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
