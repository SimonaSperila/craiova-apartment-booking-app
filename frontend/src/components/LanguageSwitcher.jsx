import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";

import roFlag from "../assets/flags/ro.svg";
import gbFlag from "../assets/flags/gb.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { SUPPORTED_LANGUAGES } from "../i18n";

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

  const currentLang = i18n.language;

  	return (
    	<div className="lang-switcher">
			{/* BUTON PRINCIPAL */}
			<button className="lang-button" onClick={() => setOpen(!open)}>
				<img src={currentLang === "ro" ? roFlag : gbFlag} width="15" height="15" alt="lang" />
				<span>{currentLang.toUpperCase()}</span>
				<FontAwesomeIcon icon={faAngleDown} />
			</button>

			{/* DROPDOWN */}
			{open && (
				<div className="lang-dropdown">
					{currentLang !== "ro" && (
					<button onClick={() => changeLang("ro")}>
						<img src={roFlag} width="15" height="15" alt="Română" /> RO
					</button>
					)}

					{currentLang !== "en" && (
					<button onClick={() => changeLang("en")}>
						<img src={gbFlag} width="15" height="15" alt="English" /> EN
					</button>
					)}
				</div>
			)}
		</div>
  	);
}

export default LanguageSwitcher;