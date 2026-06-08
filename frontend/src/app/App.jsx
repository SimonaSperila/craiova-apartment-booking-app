import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

import Header from "../components/Header";
import Footer from "../components/Footer";

import Home from "../pages/home/Home";
import Apartment from "../pages/apartment/Apartment";


function App() {
	return (
		<BrowserRouter>
			<Header />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:lang">
					<Route index element={<Home />} />
					<Route path="apartment" element={<Apartment />} />
				</Route>
			</Routes>

			<Footer />
		</BrowserRouter>
	);
}

export default App;