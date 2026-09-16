import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import banner from "../../assets/local-area-banner.jpg";
import mobileBanner from "../../assets/local-area-banner-mobile.jpg";
import { useBodyClass } from "../../hooks/useBodyClass";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLandmark, faMasksTheater, faMugHot, faLocationDot } from '@fortawesome/free-solid-svg-icons';

import LocalAreaSection from "./components/restaurants/LocalAreaRestaurants";
import LocalAreaPlacesToVisit from "./components/places-to-visit/LocalAreaPlacesToVisit";
import LocalBusinesses from "./components/local-businesses/LocalBusinesses";
import styles from "./LocalArea.module.css";


function LocalArea() {
    const { t } = useTranslation();
    const location = useLocation();

    useBodyClass("local-area-page");

    useEffect(() => {
        if (!location.hash) return;

        const scrollToHash = () => {
            const el = document.querySelector(location.hash);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        };

        scrollToHash();

        // Images and the restaurants/places lists load asynchronously and
        // shift the page height afterwards, so keep correcting the scroll
        // position while the layout is still settling.
        const observer = new ResizeObserver(scrollToHash);
        observer.observe(document.body);

        const stopObserving = setTimeout(() => observer.disconnect(), 2000);

        return () => {
            observer.disconnect();
            clearTimeout(stopObserving);
        };
    }, [location]);

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
                        {/* <div className={styles["banner-icons"]}>
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
                        </div> */}
                    </div>
                </div>
            </div>
            
            <LocalAreaSection />
            <LocalAreaPlacesToVisit />
            <LocalBusinesses />
        </div>
    );
};

export default LocalArea;