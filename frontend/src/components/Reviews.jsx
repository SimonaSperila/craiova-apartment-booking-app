import { useEffect, useState } from "react";
import bgReviews from '../assets/bg-reviews.jpg';
import { useTranslation } from 'react-i18next';

function Reviews() {
    const { t } = useTranslation();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/reviews")
        .then(res => res.json())
        .then(data => setReviews(data));
    }, []); 

    return (
        <div className="reviews">
            <picture>
                <source media="(max-width: 768px)" srcSet={bgReviews} />
                <img src={bgReviews} alt="Reviews" />
            </picture>

            <div className="container">
                {reviews.map((r, index) => (
                        <div key={index} className="review-card">
                            <div>
                                <strong>{r.name}</strong>
                                <span> — {r.score}</span>
                            </div>

                            {r.positive && <p>👍 {r.positive}</p>}
                            {r.negative && <p>👎 {r.negative}</p>}
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Reviews;