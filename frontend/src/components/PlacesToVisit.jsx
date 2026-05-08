import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import teatruImg from "../assets/places/teatru.jpg";

const images = {
    "teatru.jpg": teatruImg
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
    }, [i18n.language]);;

    return (
        <div className="places">
            <div className="container">
                <div className="section-header">
                    <div className="section-header-content">
                        <span className="small-title">{t("placesToVisit.subtitle")}</span>
                        <h2>{t("placesToVisit.title")}</h2>
                        <p>{t("placesToVisit.description")}</p>
                    </div>
                    <a href="/places" className="btn btn-primary">{t("placesToVisit.viewAll")}</a>
                </div>
                <div className="places-list">
                    {places.map(p => (
                        <div key={p.id} className="place-item">
                            <img src={images[p.image]} alt={p.name} className="place-image" />
                            <h3>{p.name}</h3>
                            <p>{p.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PlacesToVisit;