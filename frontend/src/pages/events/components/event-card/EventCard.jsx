import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCalendarDays } from '@fortawesome/free-solid-svg-icons';

import styles from "./EventCard.module.css";

const formatDate = (dateString, locale) => {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) return "";

    return new Intl.DateTimeFormat(locale, {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    }).format(date);
};

function EventCard({ event, image }) {
    const { i18n } = useTranslation();

    return (
        <div className={styles['event-item']}>
            {image && <img src={image} alt={event.title} className={styles['event-image']} />}
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p className={styles['event-meta']}>
                <span>
                    <FontAwesomeIcon icon={faCalendarDays} />
                    {formatDate(event.event_date, i18n.language)}
                </span>
                {event.location && (
                    <span>
                        <FontAwesomeIcon icon={faLocationDot} />
                        {event.location}
                    </span>
                )}
            </p>
        </div>
    );
}

export default EventCard;
