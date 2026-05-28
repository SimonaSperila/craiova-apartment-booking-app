import { useEffect, useState } from "react";
import bgReviews from '../assets/bg-reviews.jpg';
import { useTranslation } from 'react-i18next';

function Reviews() {
    const { t } = useTranslation();
    const [reviews, setReviews] = useState([]);
    const [startIndex, setStartIndex] = useState(0);

    const ITEMS_TO_SHOW = 1;

    useEffect(() => {
        fetch("http://localhost:3000/reviews")
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    // carousel automat
    useEffect(() => {
        if (reviews.length === 0) return;

        const interval = setInterval(() => {
            setStartIndex(prev =>
                (prev + ITEMS_TO_SHOW) % reviews.length
            );
        }, 6000); // schimbare la 4 secunde

        return () => clearInterval(interval);
    }, [reviews]);

    // ia 4 review-uri din poziția curentă (loop infinit)
    const visibleReviews =
        reviews.length > 0
            ? Array.from({ length: Math.min(ITEMS_TO_SHOW, reviews.length) })
                .map((_, i) => {
                    const index = (startIndex + i) % reviews.length;
                    return reviews[index];
                })
            : [];

    return (
        <div className="reviews">
            <picture>
                <source media="(max-width: 768px)" srcSet={bgReviews} />
                <img src={bgReviews} alt="Reviews" />
            </picture>

            <div className="container">
                {visibleReviews.map((r, index) => (
                    r && (
                        <div key={index} className="review-card">
                            <span className="review-name">{r.name}</span>
                            <span className="review-country">{r.country}</span>
                            <span className="review-score"> — {r.score}</span>

                            {r.positive && <p>{r.positive}</p>}
                        </div>
                    )
                ))}
            </div>
        </div>
    );
}

export default Reviews;