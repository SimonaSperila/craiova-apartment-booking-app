import { useTranslation } from "react-i18next";
import balconright from "../../../../assets/apartment/1.jpg";
import dormitor from "../../../../assets/apartment/dormitor.jpg";
import Logo from "../../../../components/logo/Logo";
import { NavLink } from "react-router-dom";

import styles from "./TheApartment.module.css";

function TheApartment() {  
    const { i18n, t } = useTranslation();
    const lang = i18n.language;

    return(
        <div className={styles["the-apartment"] + " homepage-section"}>
            <div className={styles["container"] + " container"}>
                <div className={styles["section-header"]}>
                    <div className={styles["section-header-content"]}>
                        <span className="small-title">{t("theApartment.subtitle")}</span>
                        <h2 className={styles["section-title"]}>{t("theApartment.title")}</h2>
                        <p>{t("theApartment.description")}</p>
                        <NavLink to={`/${lang}/apartment`} className={styles["btn"] + " btn btn-primary"}>{t("theApartment.viewDetails")}</NavLink>
                        <Logo className={styles.logo} />
                    </div>

                    <div className={styles["apartment-images"]}>
                        <img src={dormitor} alt="Apartment bedroom" className={styles["first-image"]} />
                        <img src={balconright} alt="Apartment living room" className={styles["second-image"]} />
                        <img src={balconright} alt="Apartment living room" className={styles["third-image"]} />
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default TheApartment;