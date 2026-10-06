
import { useEffect, useState } from "react";
import bgAvailability from '../../../../assets/bg-availability.jpg';
import bgAvailabilityMobile from '../../../../assets/bg-availability-mobile.jpg';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { API_BASE_URL } from '../../../../config';

import styles from "./BookingAvailability.module.css";

// etichetele de scor de pe Booking.com → chei de traducere
// (limba paginii scrape-uite depinde de unde rulează scraper-ul, deci acceptăm și română, și engleză)
const SCORE_LABEL_KEYS = {
    "excepțional": "exceptional",
    "exceptional": "exceptional",
    "superb": "superb",
    "fabulos": "fabulous",
    "fabulous": "fabulous",
    "foarte bine": "veryGood",
    "very good": "veryGood",
    "bine": "good",
    "good": "good",
    "plăcut": "pleasant",
    "pleasant": "pleasant",
};

function translateScoreText(text, t) {
    // Booking folosește uneori sedila "ţ"/"ş" în loc de virgulă "ț"/"ș"
    const normalized = text.trim().toLowerCase().replace(/ţ/g, "ț").replace(/ş/g, "ș");
    const key = SCORE_LABEL_KEYS[normalized];
    return key ? t(`reviews.scoreLabels.${key}`) : text;
}

function translateReviewsText(text, t) {
    const count = parseInt(text.replace(/\D/g, ""), 10);
    return Number.isNaN(count) ? text : t("reviews.count", { count });
}

function BookingAvailability() {
    const { t } = useTranslation();
    const [overallScore, setOverallScore] = useState(null);

    useEffect(() => {
        fetch(`${API_BASE_URL}/reviews`)
            .then(res => res.json())
            .then(data => {
                setOverallScore(data.overallScore || null);
            });
    }, []);

    return (
        <div className={styles['booking-availability']}>
            <picture>
                <source media="(max-width: 768px)" srcSet={bgAvailabilityMobile} />
                <img src={bgAvailability} alt="Availability" />
            </picture>

            <div className={styles['container'] + " container"}>
                {overallScore && (
                    <div className={styles['overall-score']}>
                        <span className={styles['score-number']}>{overallScore.scoreNumber}</span>
                        <p>
                            <span className={styles['score-text']}>{translateScoreText(overallScore.scoreText ?? "", t)}</span>
                            <span className={styles['reviews-text']}>{translateReviewsText(overallScore.reviewsText ?? "", t)}</span>
                        </p>
                    </div>
                )}

                <span className={styles['vertical-border']}></span>

                <div className={styles['availability-check']}>
                    <span className={styles['calendar-icon']}>
                        <FontAwesomeIcon icon={faCalendarDays} />
                    </span>

                    <div className={styles['availability-text']}>  
                        <p>
                            {t('bookingAvailability.title')}
                            <span>{t('bookingAvailability.subtitle')}</span>
                        </p>
                    </div>

                    <a href="https://www.booking.com/hotel/ro/shakespeare-central-apartment.html" target="_blank" rel="noopener noreferrer" className={styles['check-availability-btn'] + " btn btn-secondary"}>
                        {t('bookingAvailability.checkAvailability')}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default BookingAvailability;