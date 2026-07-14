import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Logo from "./logo/Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import { NavLink } from "react-router-dom";

import styles from "./logo/Logo.module.css";

function Header() {
  	const { i18n, t } = useTranslation();
	const lang = i18n.language;
  	const [open, setOpen] = useState(false);

  	return (
		<header>
			<div className="container">
				<Logo />

				<nav className={open ? "nav active" : "nav"}>
					<Logo />

					<ul>
						<li><NavLink to="/">{t("nav.home")}</NavLink></li>
						<li><NavLink to={`/${lang}/apartment`} className={({ isActive }) => (isActive ? "active" : "")}>{t("nav.apartment")}</NavLink></li>
						<li><NavLink to={`/${lang}/events`} className={({ isActive }) => (isActive ? "active" : "")}>{t("nav.events")}</NavLink></li>
						<li><NavLink to={`/${lang}/gallery`} className={({ isActive }) => (isActive ? "active" : "")}>{t("nav.gallery")}</NavLink></li>
						<li><NavLink to={`/${lang}/attractions`} className={({ isActive }) => (isActive ? "active" : "")}>{t("nav.attractions")}</NavLink></li>
						<li><NavLink to={`/${lang}/contact`} className={({ isActive }) => (isActive ? "active" : "")}>{t("nav.contact")}</NavLink></li>
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