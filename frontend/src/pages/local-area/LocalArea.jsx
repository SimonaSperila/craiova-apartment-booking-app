import { useTranslation } from "react-i18next";
import banner from "../../assets/local-area-banner.jpg";
import mobileBanner from "../../assets/gallery-banner-mobile.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLandmark, faMasksTheater, faMugHot, faLocationDot } from '@fortawesome/free-solid-svg-icons';

import LocalAreaSection from "./components/LocalAreaRestaurants";
import styles from "./LocalArea.module.css";


function LocalArea() {
    const { t } = useTranslation();

    return (
        <div className={styles["local-area-page"]}>
            <div className={styles["local-area-banner"]}>
                <picture>
                    <source media="(max-width: 768px)" srcSet={mobileBanner} />
                    <img src={banner} alt="Local Area Banner" />
                </picture>

                <div className={styles["container"] + " container"}>
                    <div className={styles["banner-content"]}>
                        <div className={styles["banner-text"]}>
                            <h1>{t("localAreaPage.title")}</h1>
                            <p>{t("localAreaPage.description")}</p>
                        </div>
                        <div className={styles["banner-icons"]}>
                            <div className={styles["banner-icon"]}>
                                <FontAwesomeIcon icon={faLandmark} />
                                <p>{t("localAreaPage.bannerIcons.landmark")}</p>
                            </div>
                            <div className={styles["banner-icon"]}>
                                <FontAwesomeIcon icon={faMasksTheater} />
                                <p>{t("localAreaPage.bannerIcons.theater")}</p>
                            </div>
                            <div className={styles["banner-icon"]}>
                                <FontAwesomeIcon icon={faMugHot} />
                                <p>{t("localAreaPage.bannerIcons.coffee")}</p>
                            </div>
                            <div className={styles["banner-icon"]}>
                                <FontAwesomeIcon icon={faLocationDot} />
                                <p>{t("localAreaPage.bannerIcons.location")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <LocalAreaSection />
        </div>
    );
};

export default LocalArea;