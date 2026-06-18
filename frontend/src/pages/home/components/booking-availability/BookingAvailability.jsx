
import { useEffect, useState } from "react";
import bgAvailability from '../../../../assets/bg-availability.jpg';
import bgAvailabilityMobile from '../../../../assets/bg-availability-mobile.jpg';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

import styles from "./BookingAvailability.module.css";

function BookingAvailability() {
    const { t } = useTranslation();
    const [overallScore, setOverallScore] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/reviews")
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
                            <span className={styles['score-text']}>{overallScore.scoreText}</span>
                            <span className={styles['reviews-text']}>{overallScore.reviewsText}</span>
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