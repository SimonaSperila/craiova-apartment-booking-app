import bgReviews from '../assets/bg-reviews.jpg';
import { useTranslation } from 'react-i18next';

function Reviews() {
    const { t } = useTranslation();

    return (
        <div className="reviews">
            <picture>
                <source media="(max-width: 768px)" srcSet={bgReviews} />
                <img src={bgReviews} alt="Reviews" />
            </picture>

            <div className="container">
                <h2 className="section-title">Reviews</h2>
                <p>Here are some reviews from our satisfied customers!</p>
            </div>
        </div>
    );
}

export default Reviews;