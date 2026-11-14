import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faStar } from "@fortawesome/free-regular-svg-icons";
import {
    faArrowRight,
    faBus,
    faGift,
    faLocationDot,
    faMusic,
    faRoute,
    faSleigh,
    faStore,
    faTicket,
    faTrain,
    faTrainTram,
} from "@fortawesome/free-solid-svg-icons";

import heroImage from "../../assets/christmas-market/hero.svg";
import toyFactoryImage from "../../assets/christmas-market/toy-factory.svg";
import treeTrainImage from "../../assets/christmas-market/tree-train.svg";
import giantSantaImage from "../../assets/christmas-market/giant-santa.svg";
import ferrisWheelImage from "../../assets/christmas-market/ferris-wheel.svg";
import marketMapRo from "../../assets/christmas-market/christmas-market-map.ro.webp";
import marketMapEn from "../../assets/christmas-market/christmas-market-map.en.webp";
import marketMapBg from "../../assets/christmas-market/christmas-market-map.bg.webp";
import marketMapSr from "../../assets/christmas-market/christmas-market-map.sr.webp";

import Lightbox from "../../components/lightbox/Lightbox";

import styles from "./ChristmasMarket.module.css";

const BOOKING_URL = "https://www.booking.com/hotel/ro/shakespeare-central-apartment.html";

const FACTS = [
    { id: "dates", icon: faCalendarDays },
    { id: "location", icon: faLocationDot },
    { id: "lights", icon: faStar },
];

const ATTRACTIONS = [
    { id: "toyFactory", image: toyFactoryImage },
    { id: "tree", image: treeTrainImage },
    { id: "santa", image: giantSantaImage },
    { id: "wheel", image: ferrisWheelImage },
];

// Daily programme cards, in display order. Texts live under
// christmasMarketPage.program.items.<id> in the locale files.
const PROGRAM = [
    { id: "sleigh", icon: faSleigh },
    { id: "treeTrain", icon: faTrainTram, deco: "venue-tree" },
    { id: "toyFactory", icon: faGift },
    { id: "concerts", icon: faMusic, deco: "venue-music" },
    { id: "magicTrain", icon: faTrain },
    { id: "partyBus", icon: faBus },
    { id: "stalls", icon: faStore },
];

// The map artwork has its labels baked in, so there is one image per language.
const MARKET_MAPS = { ro: marketMapRo, en: marketMapEn, bg: marketMapBg, sr: marketMapSr };

function Sparkle({ className }) {
    return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 0 L14.2 9.8 L24 12 L14.2 14.2 L12 24 L9.8 14.2 L0 12 L9.8 9.8 Z" />
        </svg>
    );
}

function Ornament() {
    return (
        <div className={styles.ornament} aria-hidden="true">
            <span />
            <Sparkle className={styles.sparkle} />
            <span />
        </div>
    );
}

function SectionTitle({ children }) {
    return (
        <div className={styles["section-heading"]}>
            <Ornament />
            <h2 className={styles["section-title"]}>{children}</h2>
        </div>
    );
}

function ChristmasMarket() {
    const { t, i18n } = useTranslation();
    const marketMapImage = MARKET_MAPS[i18n.language] ?? MARKET_MAPS.ro;
    const [isMapOpen, setIsMapOpen] = useState(false);

    const scrollToProgram = (event) => {
        event.preventDefault();
        document.getElementById("program")?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <img src={heroImage} alt={t("christmasMarketPage.hero.imageAlt")} className={styles["hero-image"]} />
                <div className={`container ${styles["hero-container"]}`}>
                    <div className={styles["hero-content"]}>
                        <p className={styles.eyebrow}>{t("christmasMarketPage.hero.eyebrow")}</p>
                        <h1>{t("christmasMarketPage.hero.title")}</h1>
                        <p className={styles.tagline}>{t("christmasMarketPage.hero.tagline")}</p>
                        <a href="#program" onClick={scrollToProgram} className={styles["hero-cta"]}>
                            {t("christmasMarketPage.hero.cta")}
                            <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                    </div>
                </div>
            </section>

            <section className={`container ${styles.section} ${styles.intro}`}>
                <div className={styles["section-heading"]}>
                    <div className={`${styles.ornament} ${styles["ornament-wide"]}`} aria-hidden="true">
                        <span />
                        <Sparkle className={styles.sparkle} />
                        <span />
                    </div>
                    <h2 className={styles["intro-title"]}>{t("christmasMarketPage.intro.title")}</h2>
                </div>
                <p>{t("christmasMarketPage.intro.text1")}</p>
                <p>{t("christmasMarketPage.intro.text2")}</p>

                <ul className={styles.facts}>
                    {FACTS.map(fact => (
                        <li key={fact.id} className={styles.fact}>
                            <FontAwesomeIcon icon={fact.icon} className={styles["fact-icon"]} />
                            <div>
                                <strong>{t(`christmasMarketPage.facts.${fact.id}.title`)}</strong>
                                <span>{t(`christmasMarketPage.facts.${fact.id}.text`)}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            <section id="program" className={`container ${styles.section} ${styles.program}`}>
                <SectionTitle>{t("christmasMarketPage.program.title")}</SectionTitle>

                <p className={styles["program-subtitle"]}>{t("christmasMarketPage.program.subtitle")}</p>

                <div className={styles.venues}>
                    {PROGRAM.map(({ id, icon, deco }) => {
                        const item = t(`christmasMarketPage.program.items.${id}`, { returnObjects: true });
                        if (!item || typeof item !== "object") return null;

                        return (
                            <article key={id} className={`${styles.venue} ${deco ? styles[deco] : ""}`}>
                                <h3>
                                    <FontAwesomeIcon icon={icon} className={styles["venue-icon"]} />
                                    {item.name}
                                </h3>
                                {item.meta && <p className={styles["venue-meta"]}>{item.meta}</p>}

                                {item.schedule?.length > 0 && (
                                    <dl className={styles.schedule}>
                                        {item.schedule.map(row => (
                                            <div key={row.time + row.label} className={styles["schedule-row"]}>
                                                <dt>{row.time}</dt>
                                                <dd>{row.label}</dd>
                                            </div>
                                        ))}
                                    </dl>
                                )}

                                {item.slots?.length > 0 && (
                                    <ul className={styles.slots}>
                                        {item.slots.map(slot => <li key={slot}>{slot}</li>)}
                                    </ul>
                                )}

                                {item.price && (
                                    <p className={styles.price}>
                                        <FontAwesomeIcon icon={faTicket} />
                                        {item.price}
                                    </p>
                                )}

                                {item.notes?.length > 0 && (
                                    <ul className={styles.highlights}>
                                        {item.notes.map(note => (
                                            <li key={note}>
                                                <Sparkle className={styles["highlight-icon"]} />
                                                {note}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {item.route?.length > 0 && (
                                    <div className={styles.route}>
                                        <strong>
                                            <FontAwesomeIcon icon={faRoute} />
                                            {t("christmasMarketPage.program.routeLabel")}
                                        </strong>
                                        <ol>
                                            {item.route.map((stop, index) => <li key={index}>{stop}</li>)}
                                        </ol>
                                    </div>
                                )}
                            </article>
                        );
                    })}
                </div>
            </section>

            <section className={`container ${styles.section}`}>
                <SectionTitle>{t("christmasMarketPage.map.title")}</SectionTitle>

                <figure className={styles.map}>
                    <button type="button" onClick={() => setIsMapOpen(true)}>
                        <img src={marketMapImage} alt={t("christmasMarketPage.map.imageAlt")} loading="lazy" width="1600" height="1012" />
                    </button>
                    <figcaption>{t("christmasMarketPage.map.hint")}</figcaption>
                </figure>

                {isMapOpen && (
                    <Lightbox
                        images={[{ src: marketMapImage, alt: t("christmasMarketPage.map.imageAlt") }]}
                        activeIndex={0}
                        onNavigate={() => {}}
                        onClose={() => setIsMapOpen(false)}
                    />
                )}
            </section>

            <section className={`container ${styles.section}`}>
                <SectionTitle>{t("christmasMarketPage.discover.title")}</SectionTitle>

                <ul className={styles.attractions}>
                    {ATTRACTIONS.map(attraction => (
                        <li key={attraction.id} className={styles.attraction}>
                            <img src={attraction.image} alt="" loading="lazy" />
                            <h3>{t(`christmasMarketPage.discover.items.${attraction.id}`)}</h3>
                        </li>
                    ))}
                </ul>
            </section>

            <section className={`container ${styles.section} ${styles.stay}`}>
                <Ornament />
                <h2>{t("christmasMarketPage.stay.title")}</h2>
                <p>{t("christmasMarketPage.stay.text")}</p>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={styles["stay-cta"]}>
                    {t("christmasMarketPage.stay.cta")}
                    <FontAwesomeIcon icon={faArrowRight} />
                </a>
            </section>

            <div className={styles["trees-border"]} aria-hidden="true" />
        </div>
    );
}

export default ChristmasMarket;
