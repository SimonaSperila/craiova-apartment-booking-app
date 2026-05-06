import logo from '../assets/logo.png';
import { useTranslation } from 'react-i18next';

function Logo() {
    const { t } = useTranslation();
    
    return (
        <a href="" className="logo">
            <img src={logo} alt="Logo" width="65"  height="51" />
            <span className="logo-title">{t("logo.title")} <br /> 
                <span className="logo-subtitle">{t("logo.subtitle")}</span>
            </span>
        </a>
    );
}

export default Logo;