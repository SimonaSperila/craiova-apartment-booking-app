import { useTranslation } from "react-i18next";
import balconright from "../assets/apartment/1.jpg";
import dormitor from "../assets/apartment/dormitor.jpg";
import Logo from "./Logo";

function TheApartment() {  
const { t, i18n } = useTranslation();

    return(
        <div className="the-apartment homepage-section">
            <div className="container">
                <div className="section-header">
                    <div className="section-header-content">
                        <span className="small-title">{t("theApartment.subtitle")}</span>
                        <h2 className="section-title">{t("theApartment.title")}</h2>
                        <p>{t("theApartment.description")}</p>
                        <a href="/apartment" className="btn btn-primary">{t("theApartment.viewDetails")}</a>
                        <Logo />
                    </div>

                    <div className="apartment-images">
                        <img src={dormitor} alt="Apartment bedroom" className="first-image" />
                        <img src={balconright} alt="Apartment living room" className="second-image" />
                        <img src={balconright} alt="Apartment living room" className="third-image" />
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default TheApartment;