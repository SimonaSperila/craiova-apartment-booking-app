import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from './ImageSlider.module.css';

function ImageSlider({ images, alt = '' }) {
    const [activeIndex, setActiveIndex] = useState(0);

    if (!images || images.length === 0) return null;

    const goTo = (index) => {
        setActiveIndex((index + images.length) % images.length);
    };

    return (
        <div className={styles["image-slider"] + " image-slider"}>
            <div className={styles["image-slider-viewport"]}>
                <img src={images[activeIndex]} alt={`${alt} ${activeIndex + 1}`} />

                {images.length > 1 && (
                    <>
                        <button
                            type="button"
                            className={styles["image-slider-arrow"] + " " + styles["image-slider-arrow--prev"]}
                            onClick={() => goTo(activeIndex - 1)}
                            aria-label="Previous image"
                        >
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                        <button
                            type="button"
                            className={styles["image-slider-arrow"] + " " + styles["image-slider-arrow--next"]}
                            onClick={() => goTo(activeIndex + 1)}
                            aria-label="Next image"
                        >
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </>
                )}
            </div>

            {images.length > 1 && (
                <div className={styles["image-slider-dots"] + " image-slider-dots"}>
                    {images.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            className={styles["image-slider-dot"] + (index === activeIndex ? " " + styles["image-slider-dot--active"] : "")}
                            onClick={() => goTo(index)}
                            aria-label={`Go to image ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default ImageSlider;
