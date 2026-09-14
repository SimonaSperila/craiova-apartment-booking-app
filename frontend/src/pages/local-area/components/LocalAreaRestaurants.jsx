import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons';

import Tabs from "../../../components/tabs/Tabs";
import { API_BASE_URL } from "../../../config";
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
};

const DEFAULT_CATEGORY = "Romanian";

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
    const [activeCategory, setActiveCategory] = useState(DEFAULT_CATEGORY);
    const { t } = useTranslation();

    useEffect(() => {
        fetch(`${API_BASE_URL}/restaurants`)
            .then(res => res.json())
            .then(data => setRestaurants(data));
    }, []);

    const categories = [...new Set(restaurants.map(r => r.category).filter(Boolean))];
    const visibleRestaurants = restaurants.filter(r => r.category === activeCategory);

    return (
        <div className={styles["local-area-restaurants"]}>
            <div className={styles["container"] + " container"}>
                <div className={styles["local-area-restaurants-header"]}>
                    <span className="small-title">{t("localAreaPage.restaurantsSection.subtitle")}</span>
                    <h2>{t("localAreaPage.restaurantsSection.title")}</h2>
                    <p>{t("localAreaPage.restaurantsSection.description")}</p>
                </div>

                {categories.length > 0 && (
                    <Tabs
                        tabs={categories.map(category => ({
                            id: category,
                            label: t(CATEGORY_LABEL_KEYS[category] || category),
                        }))}
                        activeTab={activeCategory}
                        onChange={setActiveCategory}
                    />
                )}

                <div className={styles["restaurants-list"]}>
                    {visibleRestaurants.length === 0
                        ? <p>{t("localAreaPage.restaurantsSection.noResults")}</p>
                        : visibleRestaurants.map(restaurant => (
                            <div key={restaurant.id} className={styles["restaurant-item"]}>
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
                                    className={styles["btn-map"]}
                                >
                                    {t("localAreaPage.restaurantsSection.viewMap")}
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default LocalAreaRestaurants;
