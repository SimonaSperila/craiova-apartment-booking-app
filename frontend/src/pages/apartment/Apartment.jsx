import banner from "../../assets/apartment-banner.jpg";
import bannerMobile from "../../assets/apartment-banner-mobile.jpg";
import { useTranslation } from 'react-i18next';
import ApartmentDetails from "./components/ApartmentDetails";
import UserGuide from "./components/user-guide/UserGuide";
import { useBodyClass } from "../../hooks/useBodyClass";

import styles from "./Apartment.module.css";

function Apartment() {
    const { t } = useTranslation();
    useBodyClass("page-apartment");
    
    return(
        <div className={styles["apartment-page"]}>
            <div className={styles["apartment-banner"]}>
                <picture>
                    <source media="(max-width: 768px)" srcSet={bannerMobile} />
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
            <UserGuide />
        </div>
    ) ;
}   

export default Apartment;