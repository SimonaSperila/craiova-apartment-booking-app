import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCalendarDays, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import styles from "./EventCard.module.css";

const formatDate = (dateString, timeString, locale) => {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) return "";

    const formattedDate = new Intl.DateTimeFormat(locale, {
        day: "numeric",
        month: "long",
        year: "numeric"
    }).format(date);

    const formattedTime = timeString ? timeString.slice(0, 5) : "";

    return formattedTime ? `${formattedDate} · ${formattedTime}` : formattedDate;
};

function EventCard({ event }) {
    const { t, i18n } = useTranslation();

    return (
        <div className={styles['event-item']}>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p className={styles['event-meta']}>
                <span>
                    <FontAwesomeIcon icon={faCalendarDays} />
                    {formatDate(event.event_date, event.event_time, i18n.language)}
                </span>
                {event.location && (
                    <span>
                        <FontAwesomeIcon icon={faLocationDot} />
                        {event.location}
                    </span>
                )}
            </p>
            {event.details && (
                <a className={styles['event-link']} href={event.details} target="_blank" rel="noreferrer">
                    {t("eventsPage.moreInfo")}
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
            )}
        </div>
    );
}

export default EventCard;
