import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

import styles from "./Benefits.module.css";

const BUILDING_MAPS_URL = "https://maps.app.goo.gl/fnQcGZ6irzbgFRYMA";
const PARKING_MAPS_URL = "https://maps.app.goo.gl/fnTF5AXpjPU2cwq37";

function Benefits() {
    const { t, i18n } = useTranslation();

    return (
        <div className={styles['benefits'] + " homepage-section"}>
            <div className={styles['container'] + " container"}>
                <div className={styles["benefit-item"]}>
                    <span className={styles["benefit-icon"]}>
                        <FontAwesomeIcon icon={faLocationDot} />
                    </span>
                    <h2>{t("benefitsHomepage.benefit1.title")}</h2>
                    <p>{t("benefitsHomepage.benefit1.description")}</p>
                    <span className={styles["benefit-cta"]}>
                        {t("benefitsHomepage.benefit1.cta")}
                        <FontAwesomeIcon icon={faArrowRightLong} />
                    </span>
                    <a href={BUILDING_MAPS_URL} target="_blank" rel="noopener noreferrer" className={styles["benefit-link"]} aria-label={t("benefitsHomepage.benefit1.cta")}></a>
                </div>

                <div className={styles["benefit-item"]}>
                    <span className={styles["benefit-icon"]}>
                        <FontAwesomeIcon icon={faBed} />
                    </span>
                    <h2>{t("benefitsHomepage.benefit2.title")}</h2>
                    <p>{t("benefitsHomepage.benefit2.description")}</p>
                    <span className={styles["benefit-cta"]}>
                        {t("benefitsHomepage.benefit2.cta")}
                        <FontAwesomeIcon icon={faArrowRightLong} />
                    </span>
                    <Link to={`/${i18n.language}/gallery`} className={styles["benefit-link"]} aria-label={t("benefitsHomepage.benefit2.cta")}></Link>
                </div>

                <div className={styles["benefit-item"]}>
                    <span className={styles["benefit-icon"]}>
                        <FontAwesomeIcon icon={faWifi} />
                    </span>
                    <h2>{t("benefitsHomepage.benefit3.title")}</h2>
                    <p>{t("benefitsHomepage.benefit3.description")}</p>
                    <span className={styles["benefit-note"]}>{t("benefitsHomepage.benefit3.note")}</span>
                </div>

                <div className={styles["benefit-item"]}>
                    <span className={styles["benefit-icon"]}>
                        <FontAwesomeIcon icon={faCar} />
                    </span>
                    <h2>{t("benefitsHomepage.benefit4.title")}</h2>
                    <p>{t("benefitsHomepage.benefit4.description")}</p>
                    <span className={styles["benefit-cta"]}>
                        {t("benefitsHomepage.benefit4.cta")}
                        <FontAwesomeIcon icon={faArrowRightLong} />
                    </span>
                    <a href={PARKING_MAPS_URL} target="_blank" rel="noopener noreferrer" className={styles["benefit-link"]} aria-label={t("benefitsHomepage.benefit4.cta")}></a>
                </div>
            </div>
        </div>
    );
}

export default Benefits;
