import banner from "../../assets/apartment-banner.jpg";
import { useTranslation } from 'react-i18next';
import ApartmentDetails from "./components/ApartmentDetails";

import styles from "./Apartment.module.css";

function Apartment() {
    const { t } = useTranslation();
    
    return(
        <div className={styles["apartment-page"]}>
            <div className={styles["apartment-banner"]}>
                <picture>
                    <source media="(max-width: 768px)" srcSet={banner} />
                    <img src={banner} alt="Apartment Banner" />
                </picture>

                <div className={styles["container"] + " container"}>
                    <div className={styles["banner-content"]}>
                        <h1>{t("apartmentPage.title")}</h1>    
                        <p>{t("apartmentPage.description")}</p>
                    </div>
                </div>
            </div>

            <ApartmentDetails />
        </div>
    ) ;
}   

export default Apartment;