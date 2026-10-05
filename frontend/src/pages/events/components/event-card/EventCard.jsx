import { useTranslation } from "react-i18next";
import { INTL_LOCALES } from "../../../../i18n";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faClock, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import styles from "./EventCard.module.css";

const formatShortDate = (dateString, locale) => {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) return { month: "", day: "" };

    // Format day and month together — some locales (e.g. bg) render a lone short month as a number.
    const parts = new Intl.DateTimeFormat(locale, { day: "2-digit", month: "short" }).formatToParts(date);
    const month = parts.find((p) => p.type === "month").value.replace(".", "");
    const day = parts.find((p) => p.type === "day").value;

    return { month, day };
};

const formatTime = (timeString, locale) => {
    const [hours, minutes] = timeString.split(":").map(Number);
    const date = new Date();
    date.setHours(hours, minutes);

    return new Intl.DateTimeFormat(locale, { hour: "2-digit", minute: "2-digit" }).format(date);
};

function EventCard({ event }) {
    const { t, i18n } = useTranslation();
    const locale = INTL_LOCALES[i18n.language] || i18n.language;
    const { month, day } = formatShortDate(event.event_date, locale);
    const time = event.event_time ? formatTime(event.event_time, locale) : "";

    return (
        <div className={styles['event-item']}>
            <div className={styles['event-date']}>
                <span className={styles['event-day']}>{day}</span>
                <span className={styles['event-month']}>{month}</span>
                {time && (
                    <span className={styles['event-time']}>{time}</span>
                )}
            </div>
            <div className={styles['event-content']}>
                <p className={styles['event-title']}>{event.title}</p>
                 <p className={styles['event-meta']}>
                    {event.location && (
                        <span>
                            <FontAwesomeIcon icon={faLocationDot} />
                            {event.location}
                        </span>
                    )}
                </p>
                <p className={styles['event-description']}>{event.description}</p>
                {event.details && (
                    <a className={styles['event-link']} href={event.details} target="_blank" rel="noreferrer">
                        {t("eventsPage.moreInfo")}
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                )}
            </div>
        </div>
    );
}

export default EventCard;
