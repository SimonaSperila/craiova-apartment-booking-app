import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

import { API_BASE_URL } from "../../../../config";
import styles from "./LocalAreaPlacesToVisit.module.css";

const INITIAL_VISIBLE_COUNT = 4;

const formatDistance = (distance) => {
    const value = Number(distance);

    if (isNaN(value)) return "";

    if (value < 1000) {
        return `${value} m`;
    }

    return `${(value / 1000).toFixed(1)} km`;
};

function LocalAreaPlacesToVisit() {
    const [places, setPlaces] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        fetch(`${API_BASE_URL}/places?lang=${i18n.language}`)
            .then(res => res.json())
            .then(data => setPlaces(data));
    }, [i18n.language]);

    const visiblePlaces = showAll ? places : places.slice(0, INITIAL_VISIBLE_COUNT);

    return (
        <div id="what-to-visit" className={styles["local-area-places"]}>
            <div className="container">
                <div className={styles["local-area-places-header"]}>
                    <span className="small-title">{t("localAreaPage.placesSection.subtitle")}</span>
                    <h2>{t("localAreaPage.placesSection.title")}</h2>
                    <p>{t("localAreaPage.placesSection.description")}</p>
                </div>

                <div className={styles["places-list"]}>
                    {places.length === 0
                        ? <p>{t("localAreaPage.placesSection.noResults")}</p>
                        : visiblePlaces.map(place => (
                            <div key={place.id} className="row-card">
                                <div className={styles["place-main"]}>
                                    <h3>{place.name}</h3>
                                    <span className={styles["place-meta"]}>
                                        <FontAwesomeIcon icon={faLocationDot} />
                                        {formatDistance(place.distance_m)}
                                    </span>
                                </div>
                                <a
                                    href={place.google_maps_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-map"
                                >
                                    <FontAwesomeIcon icon={faArrowRightLong} />
                                    {t("localAreaPage.placesSection.viewMap")}
                                </a>
                            </div>
                        ))
                    }
                </div>

                {places.length > INITIAL_VISIBLE_COUNT && (
                    <div className="show-more-wrapper">
                        <button
                            type="button"
                            className="btn-show-more"
                            onClick={() => setShowAll(prev => !prev)}
                        >
                            {showAll
                                ? t("localAreaPage.placesSection.showLess")
                                : t("localAreaPage.placesSection.showMore")}
                        </button>
                    </div>
                )}

                <div className="section-divider"></div>
            </div>
        </div>
    );
};

export default LocalAreaPlacesToVisit;
