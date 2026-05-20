import { useTranslation } from "react-i18next";
import balcon from "../assets/apartment/balcon.jpg";
import dormitor from "../assets/apartment/dormitor.jpg";

function TheApartment() {  
const { t, i18n } = useTranslation();

    return(
        <div className="the-apartment">
            <div className="container">
                <div className="section-header">
                    <div className="section-header-content">
                        <span className="small-title">{t("theApartment.subtitle")}</span>
                        <h2 className="section-title">{t("theApartment.title")}</h2>
                        <p>{t("theApartment.description")}</p>
                    </div>

                    <div className="apartment-images">
                        <img src={dormitor} alt="Apartment bedroom" className="first-image" />
                        <img src={balcon} alt="Apartment living room" className="second-image" />
                        <img src={balcon} alt="Apartment living room" className="third-image" />
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default TheApartment;