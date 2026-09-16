import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faStar, faArrowRightLong, faHeart, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import { API_BASE_URL } from "../../../../config";
import styles from "./LocalAreaRestaurants.module.css";

const CATEGORY_LABEL_KEYS = {
    Romanian: "localAreaPage.restaurantsSection.categories.romanian",
    Pizza: "localAreaPage.restaurantsSection.categories.pizza",
    Mediterranean: "localAreaPage.restaurantsSection.categories.mediterranean",
    Contemporary: "localAreaPage.restaurantsSection.categories.contemporary",
    Fusion: "localAreaPage.restaurantsSection.categories.fusion",
    Italian: "localAreaPage.restaurantsSection.categories.italian",
    International: "localAreaPage.restaurantsSection.categories.international",
    Steakhouse: "localAreaPage.restaurantsSection.categories.steakhouse",
    Brunch: "localAreaPage.restaurantsSection.categories.brunch",
    "Fine Dining": "localAreaPage.restaurantsSection.categories.fineDining",
    "Wine Bar": "localAreaPage.restaurantsSection.categories.wineBar",
    Burgers: "localAreaPage.restaurantsSection.categories.burgers",
    Pub: "localAreaPage.restaurantsSection.categories.pub",
    Asian: "localAreaPage.restaurantsSection.categories.asian",
    "Dessert Shop": "localAreaPage.restaurantsSection.categories.dessertShop",
};

const INITIAL_VISIBLE_COUNT = 4;

const formatDistance = (distance) => {
    const value = Number(distance);

    if (isNaN(value)) return "";

    if (value < 1000) {
        return `${value} m`;
    }

    return `${(value / 1000).toFixed(1)} km`;
};

function LocalAreaRestaurants() {
    const [restaurants, setRestaurants] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        fetch(`${API_BASE_URL}/restaurants`)
            .then(res => res.json())
            .then(data => setRestaurants(Array.isArray(data) ? data : []));
    }, []);

    const visibleRestaurants = showAll ? restaurants : restaurants.slice(0, INITIAL_VISIBLE_COUNT);
    const recommendedRestaurants = restaurants.filter(r => Number(r.recommended) === 1);

    return (
        <div className={styles["local-area-restaurants"]}>
            <div className="container">
                <div className={styles["local-area-restaurants-header"]}>
                    <span className="small-title">{t("localAreaPage.restaurantsSection.subtitle")}</span>
                    <h2>{t("localAreaPage.restaurantsSection.title")}</h2>
                    <p>{t("localAreaPage.restaurantsSection.description")}</p>
                </div>

                <div className={styles["restaurants-list"]}>
                    {restaurants.length === 0
                        ? <p>{t("localAreaPage.restaurantsSection.noResults")}</p>
                        : visibleRestaurants.map(restaurant => (
                            <div key={restaurant.id} className="row-card">
                                <div className={styles["restaurant-main"]}>
                                    <div className={styles["restaurant-top"]}>
                                        <h3>{restaurant.name}</h3>
                                        <span className={styles["restaurant-category"]}>
                                            {t(CATEGORY_LABEL_KEYS[restaurant.category] || restaurant.category)}
                                        </span>
                                    </div>
                                    <div className={styles["restaurant-meta"]}>
                                        <span>
                                            <FontAwesomeIcon icon={faLocationDot} />
                                            {formatDistance(restaurant.distance_m)}
                                        </span>
                                        <span className={styles["restaurant-rating"]}>
                                            <FontAwesomeIcon icon={faStar} />
                                            {Number(restaurant.rating).toFixed(1)}
                                        </span>
                                    </div>
                                </div>
                                <a
                                    href={restaurant.google_maps_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-map"
                                >
                                    <FontAwesomeIcon icon={faArrowRightLong} />
                                    {t("localAreaPage.restaurantsSection.viewMap")}
                                </a>
                            </div>
                        ))
                    }
                </div>

                {restaurants.length > INITIAL_VISIBLE_COUNT && (
                    <div className="show-more-wrapper">
                        <button
                            type="button"
                            className="btn-show-more"
                            onClick={() => setShowAll(prev => !prev)}
                        >
                            {showAll
                                ? t("localAreaPage.restaurantsSection.showLess")
                                : t("localAreaPage.restaurantsSection.showMore")}
                        </button>
                    </div>
                )}

                <div className={styles["recommendation-section"]}>
                    {recommendedRestaurants.map(recommendedRestaurant => (
                        <div key={recommendedRestaurant.id} className={styles["recommend-card"]}>
                            <div className={styles["recommend-icon"]}>
                                <FontAwesomeIcon icon={faHeart} />
                            </div>
                            <div className={styles["recommend-body"]}>
                                <span className={styles["recommend-badge"]}>
                                    {t(`localAreaPage.restaurantsSection.recommendation.badge.${recommendedRestaurant.id}`)}
                                </span>
                                <div className={styles["recommend-top"]}>
                                    <h3>{recommendedRestaurant.name}</h3>
                                    <span className={styles["restaurant-category"]}>
                                        {t(CATEGORY_LABEL_KEYS[recommendedRestaurant.category] || recommendedRestaurant.category)}
                                    </span>
                                </div>
                                <p>{t(`localAreaPage.restaurantsSection.recommendation.descriptions.${recommendedRestaurant.id}`)}</p>
                                <a
                                    href={recommendedRestaurant.google_maps_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles["btn-recommend"]}
                                >
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                    {t("localAreaPage.restaurantsSection.viewMap")}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="section-divider"></div>
            </div>
        </div>
    );
};

export default LocalAreaRestaurants;
