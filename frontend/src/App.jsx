import { useEffect, useState } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from "./components/Header";
import Banner from "./components/Banner";
import Benefits from "./components/Benefits";
import { useTranslation } from "react-i18next";

function App() {
  const [places, setPlaces] = useState([]);
  const { i18n } = useTranslation();

useEffect(() => {
  fetch(`http://localhost:3000/places?lang=${i18n.language}`)
    .then(res => res.json())
    .then(data => setPlaces(data));
}, [i18n.language]);

  return (
    <div>
      <Header />
      <Banner />
      <Benefits />

{/*       {places.map(p => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>{p.description}</p>
        </div>
      ))} */}
    </div>
  );
}

export default App;
