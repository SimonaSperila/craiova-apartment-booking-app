import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';

import banner from "../../assets/events-banner.jpg";

import EventCard from "./components/event-card/EventCard";
import { API_BASE_URL } from "../../config";

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

    return(
        <div className={styles["events-page"]}>
            <div className={styles["events-banner"]}>
                <picture>
                    <source media="(max-width: 768px)" srcSet={banner} />
                    <img src={banner} alt="Events Banner" />
                </picture>
            </div>

            <div className={styles['events-section']}>
                <div className={styles['container'] + " container"}>
                    <div className={styles['section-header']}>
                        <div className={styles['section-header-content']}>
                            <h2 className='section-title'>
                                <FontAwesomeIcon icon={faCalendarDays} />
                                {t("eventsPage.future.title")}
                            </h2>
                        </div>
                    </div>
                    <div className={styles['events-section-content']}>
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

                            <div className={styles['events-section-sidebar-past-events']}>
                                <div className={styles['section-header']}>
                                    <div className={styles['section-header-content']}>
                                        <h3 className='section-title'>{t("eventsPage.past.title")}</h3>
                                        <p>{t("eventsPage.past.description")}</p>
                                    </div>
                                </div>
                                <div className={styles['events-list']}>
                                    {pastEvents.length === 0
                                        ? <p>{t("eventsPage.noEvents")}</p>
                                        : pastEvents.map(event => (
                                            <EventCard key={event.id} event={event} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Events;
