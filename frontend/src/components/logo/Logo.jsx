import logo from '../../assets/logo.png';
import { useTranslation } from 'react-i18next';

import styles from "./Logo.module.css";

function Logo({ className = "" }) {
    const { t } = useTranslation();
    
    return (
        <a href="/" className={styles["logo"] + " " + className + " logo"}>
            <img src={logo} alt="Logo" width="65"  height="51" />
            <span className={styles["logo-title"] + " logo-title"}>{t("logo.title")} <br /> 
                <span className={styles["logo-subtitle"] + " logo-subtitle"}>{t("logo.subtitle")}</span>
            </span>
        </a>
    );
}

export default Logo;