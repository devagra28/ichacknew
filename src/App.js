import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import './App.css';
import Sponsor from './pages/Sponsor';
import Team from './pages/Team';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/sponsor' sponsor element={<Sponsor/>} />
          <Route path='/team' sponsor element={<Team/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
