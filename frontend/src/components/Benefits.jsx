import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';

function Benefits() {
    const { t } = useTranslation();  

    return (
        <div className="benefits homepage-section">
            <div className="container">
                <div className="benefit-item">
                    <span className="benefit-icon">
                        <FontAwesomeIcon icon={faLocationDot} />
                    </span>
                    <h2>{t("benefitsHomepage.benefit1.title")}</h2>
                    <p>{t("benefitsHomepage.benefit1.description")}</p>
                </div>

                <div className="benefit-item">
                    <span className="benefit-icon">
                        <FontAwesomeIcon icon={faBed} />
                    </span>
                    <h2>{t("benefitsHomepage.benefit2.title")}</h2>
                    <p>{t("benefitsHomepage.benefit2.description")}</p>
                </div>

                <div className="benefit-item">
                    <span className="benefit-icon">
                        <FontAwesomeIcon icon={faWifi} />
                    </span>
                    <h2>{t("benefitsHomepage.benefit3.title")}</h2>
                    <p>{t("benefitsHomepage.benefit3.description")}</p>
                </div>

                <div className="benefit-item">
                    <span className="benefit-icon">
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