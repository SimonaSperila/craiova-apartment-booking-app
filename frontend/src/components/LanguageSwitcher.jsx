import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";

import roFlag from "../assets/flags/ro.svg";
import gbFlag from "../assets/flags/gb.svg";
import bgFlag from "../assets/flags/bg.svg";
import srFlag from "../assets/flags/sr.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { SUPPORTED_LANGUAGES } from "../i18n";

const LANGUAGES = [
	{ code: "ro", flag: roFlag, name: "Română" },
	{ code: "en", flag: gbFlag, name: "English" },
	{ code: "bg", flag: bgFlag, name: "Български" },
	{ code: "sr", flag: srFlag, name: "Srpski" },
];

function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const changeLang = (lang) => {
		i18n.changeLanguage(lang);
		setOpen(false);

		const segments = location.pathname.split("/");
		if (SUPPORTED_LANGUAGES.includes(segments[1])) {
			segments[1] = lang;
			navigate(segments.join("/") + location.search + location.hash);
		}
    };

  const currentLang = LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0];

  	return (
    	<div className="lang-switcher">
			{/* BUTON PRINCIPAL */}
			<button className="lang-button" onClick={() => setOpen(!open)}>
				<img src={currentLang.flag} width="15" height="15" alt="lang" />
				<span>{currentLang.code.toUpperCase()}</span>
				<FontAwesomeIcon icon={faAngleDown} />
			</button>

			{/* DROPDOWN */}
			{open && (
				<div className="lang-dropdown">
					{LANGUAGES.filter((l) => l.code !== currentLang.code).map((l) => (
					<button key={l.code} onClick={() => changeLang(l.code)}>
						<img src={l.flag} width="15" height="15" alt={l.name} /> {l.code.toUpperCase()}
					</button>
					))}
				</div>
			)}
		</div>
  	);
}

export default LanguageSwitcher;
