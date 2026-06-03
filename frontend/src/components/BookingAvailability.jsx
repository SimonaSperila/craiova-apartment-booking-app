
import { useEffect, useState } from "react";
import bgAvailability from '../assets/bg-availability.jpg';
import bgAvailabilityMobile from '../assets/bg-availability-mobile.jpg';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

function BookingAvailability() {
    const { t } = useTranslation();
    const [overallScore, setOverallScore] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/reviews")
            .then(res => res.json())
            .then(data => {
                setOverallScore(data.overallScore);
            });
    }, []);

    return (
        <div className="booking-availability">
            <picture>
                <source media="(max-width: 768px)" srcSet={bgAvailabilityMobile} />
                <img src={bgAvailability} alt="Availability" />
            </picture>

            <div className="container">
                {overallScore && (
                    <div className="overall-score">
                        <span className="score-number">{overallScore.scoreNumber}</span>
                        <p>
                            <span className="score-text">{overallScore.scoreText}</span>
                            <span className="reviews-text">{overallScore.reviewsText}</span>
                        </p>
                    </div>
                )}

                <span className="vertical-border"></span>

                <div className="availability-check">
                    <span className="calendar-icon">
                        <FontAwesomeIcon icon={faCalendarDays} />
                    </span>

                    <div className="availability-text">  
                        <p>
                            {t('bookingAvailability.title')}
                            <span>{t('bookingAvailability.subtitle')}</span>
                        </p>
                    </div>

                    <a href="https://www.booking.com/hotel/ro/shakespeare-central-apartment.html" target="_blank" rel="noopener noreferrer" className="btn btn-secondary check-availability-btn">
                        {t('bookingAvailability.checkAvailability')}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default BookingAvailability;