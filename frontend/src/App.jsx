
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from "./components/Header";
import Banner from "./components/Banner";
import Benefits from "./components/Benefits";
import PlacesToVisit from './components/PlacesToVisit';
import TheApartment from './components/TheApartment';

function App() {
	return (
		<div>
			<Header />
			<Banner />
			<Benefits />
			<PlacesToVisit />
			<TheApartment />
		</div>
	);
}

export default App;
