import React from "react";
import logo from '../assets/logo.png';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();

  return (
    <header>
      <div className="container">
        <a href="" className="logo">
          <img src={logo} alt="Logo" width="65"  height="51" />
          <span className="logo-title">{t("logo.title")} <br /> 
            <span className="logo-subtitle">{t("logo.subtitle")}</span>
          </span>
        </a>
        <nav>
          <a href="/">{t("nav.home")}</a>
          <a href="/places">{t("nav.events")}</a>
          <a href="/places">{t("nav.gallery")}</a>
          <a href="/places">{t("nav.attractions")}</a>
          <a href="/places">{t("nav.contact")}</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;