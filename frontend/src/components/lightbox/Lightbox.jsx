import { useCallback, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './Lightbox.module.css';

function Lightbox({ images, activeIndex, onClose, onNavigate }) {
    const goTo = useCallback((index) => {
        onNavigate((index + images.length) % images.length);
    }, [images.length, onNavigate]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') onClose();
            if (event.key === 'ArrowLeft') goTo(activeIndex - 1);
            if (event.key === 'ArrowRight') goTo(activeIndex + 1);
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [activeIndex, goTo, onClose]);

    useEffect(() => {
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = originalOverflow; };
    }, []);

    if (!images || images.length === 0) return null;

    return (
        <div className={styles["lightbox"]} onClick={onClose}>
            <button
                type="button"
                className={styles["lightbox-close"]}
                onClick={onClose}
                aria-label="Close"
            >
                <FontAwesomeIcon icon={faXmark} />
            </button>

            <div className={styles["lightbox-content"]} onClick={(event) => event.stopPropagation()}>
                <img src={images[activeIndex].src} alt={images[activeIndex].alt} />
            </div>

            {images.length > 1 && (
                <>
                    <button
                        type="button"
                        className={styles["lightbox-arrow"] + " " + styles["lightbox-arrow--prev"]}
                        onClick={(event) => { event.stopPropagation(); goTo(activeIndex - 1); }}
                        aria-label="Previous image"
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button
                        type="button"
                        className={styles["lightbox-arrow"] + " " + styles["lightbox-arrow--next"]}
                        onClick={(event) => { event.stopPropagation(); goTo(activeIndex + 1); }}
                        aria-label="Next image"
                    >
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>

                    <div className={styles["lightbox-counter"]}>
                        {activeIndex + 1} / {images.length}
                    </div>
                </>
            )}
        </div>
    );
}

export default Lightbox;
