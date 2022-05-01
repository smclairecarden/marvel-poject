import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Characters from './pages/Characters/Characters';
import CharacterDetails from './pages/CharacterDetails/CharacterDetails';
import HomePage from './pages/HomePage/HomePage';
import CharacterEvents from './pages/CharacterEvents/CharacterEvents';
import Comics from './pages/Comics/Comics';
import ComicDetails from './pages/ComicDetails/ComicDetails';
import CharacterSeries from './pages/CharacterSeries/CharacterSeries';

function App() {
const [navItems, setNavItems] = useState([
  {url: "/", name: 'Home'},
  {url: "/characters", name: "Characters"},
  {url: "/comics", name: "Comics"}
])

  return (
    <div className="App">
      <>
        <NavBar navItems={navItems} />
        <Routes>
          <Route path="/characters" element={<Characters />}/>
          <Route path="/details" element={<CharacterDetails />}/>
          <Route path="/" element={<HomePage />}/>
          <Route path="/events" element={<CharacterEvents />}/>
          <Route path="/comics" element={<Comics />}/>
          <Route path="/comic-details" element={<ComicDetails />}/>
          <Route path="/series" element={<CharacterSeries />}/>
        </Routes>
      </>
    </div>
  );
}

export default App;
