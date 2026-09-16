import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLocationDot,
    faBagShopping,
    faStore,
    faPumpSoap,
    faCartShopping,
    faPrescriptionBottleMedical,
    faMugHot,
} from '@fortawesome/free-solid-svg-icons';

import { API_BASE_URL } from "../../../../config";
import styles from "./LocalBusinesses.module.css";

const CATEGORY_LABEL_KEYS = {
    "Mall": "localAreaPage.businessSection.categories.mall",
    "Drogherie": "localAreaPage.businessSection.categories.drogherie",
    "Centru comercial": "localAreaPage.businessSection.categories.centrucommercial",
    "Supermarket": "localAreaPage.businessSection.categories.supermarket",
    "Farmacie": "localAreaPage.businessSection.categories.farmacie",
    "Cafenea": "localAreaPage.businessSection.categories.coffeeShop",
};

const CATEGORY_ICONS = {
    "Mall": faBagShopping,
    "Drogherie": faPumpSoap,
    "Centru comercial": faStore,
    "Supermarket": faCartShopping,
    "Farmacie": faPrescriptionBottleMedical,
    "Cafenea": faMugHot,
};

const formatDistance = (distance) => {
    const value = Number(distance);

    if (isNaN(value)) return "";

    if (value < 1000) {
        return `${value} m`;
    }

    return `${(value / 1000).toFixed(1)} km`;
};

function LocalBusinesses() {
    const [businesses, setBusinesses] = useState([]);
    const { t } = useTranslation();

    useEffect(() => {
        fetch(`${API_BASE_URL}/local-businesses`)
            .then(res => res.json())
            .then(data => setBusinesses(data));
    }, []);

    return (
        <div className={styles["local-area-businesses"]}>
            <div className="container">
                <div className={styles["local-area-businesses-header"]}>
                    <span className="small-title">{t("localAreaPage.businessSection.subtitle")}</span>
                    <h2>{t("localAreaPage.businessSection.title")}</h2>
                    <p>{t("localAreaPage.businessSection.description")}</p>
                </div>

                <div className={styles["businesses-grid"]}>
                    {businesses.length === 0
                        ? <p>{t("localAreaPage.businessSection.noResults")}</p>
                        : businesses.map(business => (
                            <a
                                key={business.id}
                                href={business.google_maps_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles["business-card"]}
                            >
                                <div className={styles["business-icon"]}>
                                    <FontAwesomeIcon icon={CATEGORY_ICONS[business.category] || faStore} />
                                </div>
                                <h4>{business.name}</h4>
                                <span className={styles["business-type"]}>
                                    {t(CATEGORY_LABEL_KEYS[business.category] || business.category)}
                                </span>
                                {Number(business.is_24_7) === 1 && (
                                    <span className={styles["business-badge"]}>
                                        {t("localAreaPage.businessSection.open24")}
                                    </span>
                                )}
                                <span className={styles["business-distance"]}>
                                    <FontAwesomeIcon icon={faLocationDot} />
                                    {formatDistance(business.distance_m)}
                                </span>
                            </a>
                        ))
                    }
                </div>

                <div className="section-divider"></div>
            </div>
        </div>
    );
}

export default LocalBusinesses;
