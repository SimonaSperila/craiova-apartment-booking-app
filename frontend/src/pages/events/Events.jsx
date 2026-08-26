import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import banner from "../../assets/events-banner.jpg";

import EventCard from "./components/event-card/EventCard";
import { API_BASE_URL } from "../../config";
import { getActiveTemporaryBanner } from "./temporaryBanners";

import styles from "./Events.module.css";

const CATEGORY_LABEL_KEYS = {
    concerte: "eventsPage.categories.concerte",
    teatru: "eventsPage.categories.teatru",
    spectacole: "eventsPage.categories.spectacole",
    "alte-evenimente": "eventsPage.categories.alteEvenimente",
};

function Events() {
    const [events, setEvents] = useState([]);
    const [activeCategory, setActiveCategory] = useState("all");
    const { t, i18n } = useTranslation();

    useEffect(() => {
        fetch(`${API_BASE_URL}/events?lang=${i18n.language}`)
            .then(res => res.json())
            .then(data => setEvents(data));
    }, [i18n.language]);

    const futureEvents = events.filter(e => new Date(e.event_date) >= new Date());
    const pastEvents = events
        .filter(e => new Date(e.event_date) < new Date())
        .sort((a, b) => new Date(b.event_date) - new Date(a.event_date));

    const categories = ["all", ...new Set(futureEvents.map(e => e.category).filter(Boolean))];
    const visibleEvents = activeCategory === "all"
        ? futureEvents
        : futureEvents.filter(e => e.category === activeCategory);

    const defaultBannerTitle = t("eventsPage.title");
    const defaultBannerDescription = t("eventsPage.description");

    const temporaryBanner = getActiveTemporaryBanner();
    const bannerSrc = temporaryBanner ? temporaryBanner.image : banner;
    const bannerAlt = temporaryBanner ? temporaryBanner.alt : "Events Banner";
    const bannerTitle = temporaryBanner ? temporaryBanner.titleKey : defaultBannerTitle;
    const bannerSubtitle = temporaryBanner ? temporaryBanner.subtitleKey : null;
    const bannerDescription = temporaryBanner ? temporaryBanner.descriptionKey : defaultBannerDescription;
    const bannerDate = temporaryBanner ? temporaryBanner.dateKey : null;

    return(
        <div className={styles["events-page"]}>
            <div className={styles["events-banner"]}>
                <picture>
                    <source media="(max-width: 768px)" srcSet={bannerSrc} />
                    <img src={bannerSrc} alt={bannerAlt} />
                </picture>

                <div className={styles["container"] + " container"}>
                    <div className={styles["banner-content"]}>
                        {bannerTitle && <h1><a href="https://puppetsoccupystreet.ro/2026/08/16/program-stardust-edition-2026/" target="_blank" rel="noreferrer">
                            {t(bannerTitle)} <FontAwesomeIcon icon={faArrowRight} /></a>
                        </h1>}
                        {bannerSubtitle && <p className={styles["banner-subtitle"]}>{t(bannerSubtitle)}</p>}
                        {bannerDate && <p className={styles["banner-date"]}><FontAwesomeIcon icon={faCalendarDays} /> {t(bannerDate)}</p>}
                        {bannerDescription && <p className={styles["banner-description"]}>{t(bannerDescription)}</p>}
                    </div>
                </div>
            </div>

            <div className={styles['events-section']}>
                <div className={styles['container'] + " container"}>
                    <div className={styles['events-section-main']}>
                        {categories.length > 1 && (
                            <div className="tabs">
                                {categories.map(category => (
                                    <button
                                        key={category}
                                        className={"tab" + (activeCategory === category ? " tab--active" : "")}
                                        onClick={() => setActiveCategory(category)}
                                    >
                                        {category === "all"
                                            ? t("eventsPage.categories.all")
                                            : t(CATEGORY_LABEL_KEYS[category] || category)}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className={styles['events-section-content']}>
                        <div className={styles['events-section-content-list']}>
                            <div className={styles['events-list']}>
                                {visibleEvents.length === 0
                                    ? <p>{t("eventsPage.noEvents")}</p>
                                    : visibleEvents.map(event => (
                                        <EventCard key={event.id} event={event} />
                                    ))
                                }
                            </div>
                        </div>

                        <div className={styles['events-section-sidebar']}>
                            <div className={styles['events-section-sidebar-reservation']}>
                                <span className={styles['events-section-sidebar-reservation-icon']}>
                                    <FontAwesomeIcon icon={faCalendarDays} />
                                </span>
                                <h3 className={styles['events-section-sidebar-reservation-title']}>{t("eventsPage.sidebar.title")}</h3>
                                <p className={styles['events-section-sidebar-reservation-description']}>{t("eventsPage.sidebar.description")}</p>
                                <a href="https://www.booking.com/hotel/ro/shakespeare-central-apartment.html" target="_blank" rel="noreferrer" className={styles['events-section-sidebar-reservation-button'] + " btn btn-primary"}>
                                    {t("eventsPage.sidebar.checkAvailability")}
                                    <FontAwesomeIcon icon={faCalendarDays} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Events;
