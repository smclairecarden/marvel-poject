import { useState } from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
const [navItems, setNavItems] = useState([
  {url: "/characters", name: "Characters"},
  {url: "/comics", name: "Comics"}
])

  return (
    <div className="App">
      <>
        <NavBar navItems={navItems} />
      </>
      <h1>Marvelpalooza!</h1>
      
    </div>
  );
}

export default App;
