import { useState } from "react";
import { useTranslation } from "react-i18next";

import roFlag from "../assets/flags/ro.svg";
import gbFlag from "../assets/flags/gb.svg";

function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false);

    const changeLang = (lang) => {
		i18n.changeLanguage(lang);
		setOpen(false);
    };

  const currentLang = i18n.language;

  	return (
    	<div className="lang-switcher">
			{/* BUTON PRINCIPAL */}
			<button className="lang-button" onClick={() => setOpen(!open)}>
				<img src={currentLang === "ro" ? roFlag : gbFlag} alt="lang" />
				<span>{currentLang.toUpperCase()}</span>
			</button>

			{/* DROPDOWN */}
			{open && (
				<div className="lang-dropdown">
					{currentLang !== "ro" && (
					<button onClick={() => changeLang("ro")}>
						<img src={roFlag} alt="Română" width="15" height="15" /> RO
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