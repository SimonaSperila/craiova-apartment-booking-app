import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import './App.css'

import Header from "../components/Header";
import Footer from "../components/Footer";
import UnderConstruction from "../components/UnderConstruction/UnderConstruction";

import Home from "../pages/home/Home";
import Apartment from "../pages/apartment/Apartment";
import Events from "../pages/events/Events";
import Gallery from "../pages/gallery/Gallery";
import LocalArea from "../pages/local-area/LocalArea";
import Contact from "../pages/contact/Contact";
import PrivacyPolicy from "../pages/privacy-policy/PrivacyPolicy";
import CookiePolicy from "../pages/cookie-policy/CookiePolicy";
import TermsAndConditions from "../pages/terms-and-conditions/TermsAndConditions";

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
					<Route path="gallery" element={<Gallery />} />
					<Route path="local-area" element={<LocalArea />} />
					<Route path="contact" element={<Contact />} />
					<Route path="privacy-policy" element={<PrivacyPolicy />} />
					<Route path="cookie-policy" element={<CookiePolicy />} />
					<Route path="terms-and-conditions" element={<TermsAndConditions />} />
				</Route>
			</Routes>

			<Footer />
		</BrowserRouter>
	);
}

export default App;