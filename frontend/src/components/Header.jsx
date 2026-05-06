import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";

function Header() {
  	const { t } = useTranslation();
  	const [open, setOpen] = useState(false);

  	return (
		<header>
			<div className="container">
				<Logo />

				<nav className={open ? "nav active" : "nav"}>
					<Logo />

					<ul>
						<li><a href="/">{t("nav.home")}</a></li>
						<li><a href="/places">{t("nav.events")}</a></li>
						<li><a href="/places">{t("nav.gallery")}</a></li>
						<li><a href="/places">{t("nav.attractions")}</a></li>
						<li><a href="/places">{t("nav.contact")}</a></li>
					</ul>

					<span className="close" onClick={() => setOpen(false)}>
						<FontAwesomeIcon icon={faXmark} />
					</span>
				</nav>

				<LanguageSwitcher />

				<div className="hamburger" onClick={() => setOpen(!open)}>
					<FontAwesomeIcon icon={faBars} />
        		</div>
			</div>
		</header>
  	);
}

export default Header;