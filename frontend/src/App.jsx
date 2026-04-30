import { useEffect, useState } from "react";
import Header from "./components/Header";
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Banner from "./components/Banner";

function App() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/places")
      .then(res => res.json())
      .then(data => setPlaces(data));
  }, []);

  return (
    <div>
      <Header />
      <Banner />

      {places.map(p => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>{p.description}</p>
        </div>
      ))}
    </div>
  );
}


export default App;
