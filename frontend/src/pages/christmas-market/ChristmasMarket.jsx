import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faStar } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight, faLocationDot } from "@fortawesome/free-solid-svg-icons";

import heroImage from "../../assets/christmas-market/hero.svg";
import toyFactoryImage from "../../assets/christmas-market/toy-factory.svg";
import treeTrainImage from "../../assets/christmas-market/tree-train.svg";
import giantSantaImage from "../../assets/christmas-market/giant-santa.svg";
import ferrisWheelImage from "../../assets/christmas-market/ferris-wheel.svg";

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
    const { t } = useTranslation();
    const venues = t("christmasMarketPage.program.venues", { returnObjects: true });

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

                <div className={styles.venues}>
                    {Array.isArray(venues) && venues.map((venue, index) => (
                        <article key={venue.name} className={`${styles.venue} ${index === 0 ? styles["venue-tree"] : styles["venue-music"]}`}>
                            <h3>
                                <FontAwesomeIcon icon={faLocationDot} className={styles["venue-icon"]} />
                                {venue.name}
                            </h3>
                            <dl className={styles.schedule}>
                                {venue.schedule.map(item => (
                                    <div key={item.time} className={styles["schedule-row"]}>
                                        <dt>{item.time}</dt>
                                        <dd>{item.label}</dd>
                                    </div>
                                ))}
                            </dl>
                            {venue.highlights?.length > 0 && (
                                <ul className={styles.highlights}>
                                    {venue.highlights.map(highlight => (
                                        <li key={highlight}>
                                            <Sparkle className={styles["highlight-icon"]} />
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </article>
                    ))}
                </div>
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
