import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import teatruImg from "../../../../assets/places/teatru.jpg";
import centrulVechiImg from "../../../../assets/places/centrul-vechi.jpeg";
import stadionImg from "../../../../assets/places/stadion.jpeg";
import parcImg from "../../../../assets/places/parcul-nicolae-romanescu.jpg"

import styles from "./PlacesToVisit.module.css";

const images = {
    "teatru.jpg": teatruImg,
    "centrul-vechi.jpeg": centrulVechiImg,
    "stadion.jpeg": stadionImg,
    "parcul-nicolae-romanescu.jpg": parcImg
};

const formatDistance = (distance) => {
    const value = Number(distance);

    if (isNaN(value)) return "";

    if (value < 1000) {
        return `${value} m`;
    }

    return `${(value / 1000).toFixed(1)} km`;
};

function PlacesToVisit({ place }) {
    const [places, setPlaces] = useState([]);
    const { t, i18n } = useTranslation();

    useEffect(() => {
    fetch(`http://localhost:3000/places?lang=${i18n.language}`)
        .then(res => res.json())
        .then(data => {
        //console.log("🌐 FRONTEND DATA:", data);
        setPlaces(data);
        });
    }, [i18n.language]);

    return (
        <div className={styles['places'] + " homepage-section"}>
            <div className={styles['container'] + " container"}>
                <div className={styles['section-header']}>
                    <div className={styles['section-header-content']}>
                        <span className='small-title'>{t("placesToVisit.subtitle")}</span>
                        <h2 className='section-title'>{t("placesToVisit.title")}</h2>
                        <p>{t("placesToVisit.description")}</p>
                    </div>
                    <a href="/places" className={styles['btn'] + " btn btn-primary"}>{t("placesToVisit.viewAll")}</a>
                </div>
                <div className={styles['places-list']}>
                    {places.map(p => (
                        <div key={p.id} className={styles['place-item']}>
                            <img src={images[p.image]} alt={p.name} className={styles['place-image']} />
                            <h3>{p.name}</h3>
                            <p>{p.description}</p>
                            <p className={styles['place-location']}>
                                <span>
                                    <FontAwesomeIcon icon={faLocationDot} />
                                    {formatDistance(p.distance_m)}
                                </span>
                                <a href={`https://www.google.com/maps?q=${p.latitude},${p.longitude}`} target="_blank" rel="noopener noreferrer" className={styles['btn-map']}>{t("placesToVisit.viewMap")}</a>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PlacesToVisit;