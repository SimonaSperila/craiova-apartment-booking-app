import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';

import banner from "../../assets/events-banner.jpg";

import EventCard from "./components/event-card/EventCard";

import styles from "./Events.module.css";

function Events() {
    const [events, setEvents] = useState([]);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        fetch(`http://localhost:3000/events?lang=${i18n.language}`)
            .then(res => res.json())
            .then(data => setEvents(data));
    }, [i18n.language]);

    const popularEvents = events.filter(e => e.is_popular);
    const futureEvents = events.filter(e => new Date(e.event_date) >= new Date());

    return(
        <div className={styles["events-page"]}>
            <div className={styles["events-banner"]}>
                <picture>
                    <source media="(max-width: 768px)" srcSet={banner} />
                    <img src={banner} alt="Events Banner" />
                </picture>
            </div>

            <div className={styles['events-section'] + " homepage-section"}>
                <div className={styles['container'] + " container"}>
                    <div className={styles['section-header']}>
                        <div className={styles['section-header-content']}>
                            <span className='small-title'>{t("eventsPage.popular.subtitle")}</span>
                            <h2 className='section-title'>{t("eventsPage.popular.title")}</h2>
                            <p>{t("eventsPage.popular.description")}</p>
                        </div>
                    </div>
                    <div className={styles['events-list']}>
                        {popularEvents.length === 0
                            ? <p>{t("eventsPage.noEvents")}</p>
                            : popularEvents.map(event => (
                                <EventCard key={event.id} event={event} />
                            ))
                        }
                    </div>
                </div>
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
                        <div className={styles['events-list']}>
                            {futureEvents.length === 0
                                ? <p>{t("eventsPage.noEvents")}</p>
                                : futureEvents.map(event => (
                                    <EventCard key={event.id} event={event} />
                                ))
                            }
                        </div>
                        <div className={styles['events-section-sidebar']}>
                            <div className={styles['events-section-sidebar-reservation']}>
                                <span className={styles['events-section-sidebar-reservation-icon']}>
                                    <FontAwesomeIcon icon={faCalendarDays} />
                                </span>
                                <h3 className={styles['events-section-sidebar-reservation-title']}>{t("eventsPage.sidebar.title")}</h3>
                                <p className={styles['events-section-sidebar-reservation-description']}>{t("eventsPage.sidebar.description")}</p>
                                <a href="https://www.booking.com/hotel/ro/shakespeare-apartment-craiova.en-gb.html" target="_blank" rel="noreferrer" className={styles['events-section-sidebar-reservation-button']}>
                                    {t("eventsPage.sidebar.checkAvailability")}
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
