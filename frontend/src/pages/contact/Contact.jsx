import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faPhone, faEnvelope, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

import banner from "../../assets/contact-page-banner.jpg";
import mobileBanner from "../../assets/contact-page-banner-mobile.jpg";
import { useBodyClass } from "../../hooks/useBodyClass";
import styles from "./Contact.module.css";

// TODO: swap in the listing's real Google Maps place once it's set up.
const MAPS_QUERY = "Shakespeare Central Apartment, Craiova, Romania";
const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`;
const GOOGLE_MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&output=embed`;

function Contact() {
    const { t } = useTranslation();

    useBodyClass("contact-page");

    return (
        <div className={styles["contact-page"]}>
            <div className={styles["contact-banner"]}>
                <picture>
                    <source media="(max-width: 768px)" srcSet={mobileBanner} />
                    <img src={banner} alt="Contact Banner" />
                </picture>

                <div className={styles["container"] + " container"}>
                    <div className={styles["banner-content"]}>
                        <h1>{t("contactPage.title")}</h1>
                        <p>{t("contactPage.description")}</p>
                    </div>
                </div>
            </div>

            <div className={styles["contact-content"]}>
                <div className="container">
                    <div className={styles["contact-grid"]}>

                        <div className={styles["contact-card"]}>
                            <div className={styles["card-header"]}>
                                <div className={styles["contact-icon"]}>
                                    <FontAwesomeIcon icon={faLocationDot} />
                                </div>
                                <h3>{t("contactPage.addressSection.title")}</h3>
                            </div>

                            <p className={styles["address-text"]}>{t("contactPage.addressSection.address")}</p>

                            <div className={styles["map-embed"]}>
                                <iframe
                                    src={GOOGLE_MAPS_EMBED_URL}
                                    title="Shakespeare Apartment Craiova - Google Maps"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    allowFullScreen
                                />
                            </div>

                            <a
                                href={GOOGLE_MAPS_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-map"
                            >
                                {t("contactPage.addressSection.viewMap")}
                                <FontAwesomeIcon icon={faArrowRightLong} />
                            </a>
                        </div>

                        <div className={styles["contact-card"]}>
                            <div className={styles["card-header"]}>
                                <h3>{t("contactPage.detailsSection.title")}</h3>
                            </div>

                            <div className={styles["detail-row"]}>
                                <p>{t("contactPage.detailsSection.hoster")} <strong>Ovidiu</strong></p>
                            </div>

                            <div className={styles["detail-row"]}>
                                <div className={styles["contact-icon"]}>
                                    <FontAwesomeIcon icon={faPhone} />
                                </div>
                                <div>
                                    <p className={styles["detail-label"]}>{t("contactPage.detailsSection.phoneLabel")}</p>
                                    <a href="tel:+40767813197" className={styles["detail-value"]}>+40 767 813 197</a>
                                </div>
                            </div>

                            <div className={styles["detail-row"]}>
                                <div className={styles["contact-icon"]}>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                                <div>
                                    <p className={styles["detail-label"]}>{t("contactPage.detailsSection.emailLabel")}</p>
                                    <a href="mailto:shakespeare.central.apartment@gmail.com" className={styles["detail-value"]}>
                                        shakespeare.central.apartment@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className={styles["card-divider"]}></div>

                            <p className={styles["booking-text"]}>{t("contactPage.detailsSection.bookingText")}</p>
                            <a
                                href="https://www.booking.com/hotel/ro/shakespeare-central-apartment.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles["btn-booking"] + " btn btn-primary"}
                            >
                                <FontAwesomeIcon icon={faCalendarDays} />
                                {t("contactPage.detailsSection.bookingButton")}
                            </a>
                        </div>

                    </div>

                    <div className={styles["review-card"]}>
                        <div>
                            <h3>{t("contactPage.reviewSection.title")}</h3>
                            <p>{t("contactPage.reviewSection.description")}</p>
                        </div>
                        <a
                            href={GOOGLE_MAPS_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles["btn-review"] + " btn btn-secondary"}
                        >
                            <FontAwesomeIcon icon={faGoogle} />
                            {t("contactPage.reviewSection.button")}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
