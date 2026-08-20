import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import './App.css'

import Header from "../components/Header";
import Footer from "../components/Footer";
import UnderConstruction from "../components/UnderConstruction/UnderConstruction";

import Home from "../pages/home/Home";
import Apartment from "../pages/apartment/Apartment";
import Events from "../pages/events/Events";

function ComingSoonPage({ navKey }) {
	const { t } = useTranslation();
	return <UnderConstruction page={t(`nav.${navKey}`)} />;
}

function App() {
	return (
		<BrowserRouter>
			<Header />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:lang">
					<Route index element={<Home />} />
					<Route path="apartment" element={<Apartment />} />
					<Route path="events" element={<Events />} />
					<Route path="gallery" element={<ComingSoonPage navKey="gallery" />} />
					<Route path="attractions" element={<ComingSoonPage navKey="attractions" />} />
					<Route path="contact" element={<ComingSoonPage navKey="contact" />} />
				</Route>
			</Routes>

			<Footer />
		</BrowserRouter>
	);
}

export default App;