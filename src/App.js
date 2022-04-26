import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Characters from './pages/Characters/Characters';

function App() {
const [navItems, setNavItems] = useState([
  {url: "/characters", name: "Characters"},
  {url: "/comics", name: "Comics"}
])

  return (
    <div className="App">
      <>
        <NavBar navItems={navItems} />
        <Routes>
          <Route path="/characters" element={<Characters />}/>
        </Routes>
      </>
    </div>
  );
}

export default App;
