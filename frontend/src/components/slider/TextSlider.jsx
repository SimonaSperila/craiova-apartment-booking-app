import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from './TextSlider.module.css';

function TextSlider({ fields, showArrows = true }) {
    const [activeIndex, setActiveIndex] = useState(0);

    if (!fields || fields.length === 0) return null;

    const goTo = (index) => {
        setActiveIndex((index + fields.length) % fields.length);
    };

    const [field, value] = fields[activeIndex];
    const hasTitledText = value && typeof value === 'object' && !Array.isArray(value) && 'text' in value;
    const fieldTitle = hasTitledText ? value.title : null;
    const content = hasTitledText ? value.text : value;

    return (
        <div className={styles["text-slider"]}>
            <div className={styles["text-slider-viewport"]}>
                <div className={styles["text-slider-field"]} data-field={field}>
                    {fieldTitle && <h4 className={styles["text-slider-title"]}>{fieldTitle}</h4>}
                    {Array.isArray(content)
                        ? <ul>{content.map((item, index) => <li key={index}>{item}</li>)}</ul>
                        : <p>{content}</p>}
                </div>

                {showArrows && fields.length > 1 && (
                    <>
                        <button
                            type="button"
                            className={styles["text-slider-arrow"] + " " + styles["text-slider-arrow--prev"]}
                            onClick={() => goTo(activeIndex - 1)}
                            aria-label="Previous"
                        >
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                        <button
                            type="button"
                            className={styles["text-slider-arrow"] + " " + styles["text-slider-arrow--next"]}
                            onClick={() => goTo(activeIndex + 1)}
                            aria-label="Next"
                        >
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </>
                )}
            </div>

            {fields.length > 1 && (
                <div className={styles["text-slider-dots"] + " text-slider-dots"}>
                    {fields.map(([field], index) => (
                        <button
                            key={field}
                            type="button"
                            className={styles["text-slider-dot"] + (index === activeIndex ? " " + styles["text-slider-dot--active"] : "")}
                            onClick={() => goTo(index)}
                            aria-label={`Go to ${field}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default TextSlider;
