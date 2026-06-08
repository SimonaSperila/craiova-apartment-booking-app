import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';

import styles from "./Benefits.module.css";

function Benefits() {
    const { t } = useTranslation();  

    return (
        <div className={styles['benefits'] + " homepage-section"}>
            <div className={styles['container'] + " container"}>
                <div className={styles["benefit-item"]}>
                    <span className={styles["benefit-icon"]}>
                        <FontAwesomeIcon icon={faLocationDot} />
                    </span>
                    <h2>{t("benefitsHomepage.benefit1.title")}</h2>
                    <p>{t("benefitsHomepage.benefit1.description")}</p>
                </div>

                <div className={styles["benefit-item"]}>
                    <span className={styles["benefit-icon"]}>
                        <FontAwesomeIcon icon={faBed} />
                    </span>
                    <h2>{t("benefitsHomepage.benefit2.title")}</h2>
                    <p>{t("benefitsHomepage.benefit2.description")}</p>
                </div>

                <div className={styles["benefit-item"]}>
                    <span className={styles["benefit-icon"]}>
                        <FontAwesomeIcon icon={faWifi} />
                    </span>
                    <h2>{t("benefitsHomepage.benefit3.title")}</h2>
                    <p>{t("benefitsHomepage.benefit3.description")}</p>
                </div>

                <div className={styles["benefit-item"]}>
                    <span className={styles["benefit-icon"]}>
                        <FontAwesomeIcon icon={faCar} />
                    </span>
                    <h2>{t("benefitsHomepage.benefit4.title")}</h2>
                    <p>{t("benefitsHomepage.benefit4.description")}</p>
                </div>
            </div>
        </div>
    );
}

export default Benefits;