import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation, faClock, faPhone } from '@fortawesome/free-solid-svg-icons';
import ImageSlider from '../../../../components/ImageSlider';
import styles from "./UserGuide.module.css";

const TABS = [
    { id: "coffee-machine", key: "apartmentPage.userGuide.tabs.coffeeMachine" },
    { id: "air-conditioning", key: "apartmentPage.userGuide.tabs.airConditioning" },
    { id: "smart-tv", key: "apartmentPage.userGuide.tabs.smartTv" },
    { id: "heating", key: "apartmentPage.userGuide.tabs.heating" },
    { id: "other", key: "apartmentPage.userGuide.tabs.other" },
];

const TAB_IMAGE_MODULES = import.meta.glob(
    "../../../../assets/user-guide/*/*.{jpg,jpeg,png}",
    { eager: true, import: "default" }
);

const TAB_IMAGES = TABS.reduce((acc, tab) => {
    acc[tab.id] = Object.entries(TAB_IMAGE_MODULES)
        .filter(([path]) => path.includes(`/user-guide/${tab.id}/`))
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([, src]) => src);
    return acc;
}, {});

function UserGuide() {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState(TABS[0].id);
    const activeTabConfig = TABS.find((tab) => tab.id === activeTab);
    const { title, ...tabFields } = t(activeTabConfig.key, { returnObjects: true });

    return (
        <div className="container">
            <div className={styles["user-guide-section"]}>
                <h2>{t('apartmentPage.userGuide.title')}</h2>
                <p>{t('apartmentPage.userGuide.description')}</p>

                <div className="tabs">
                    {TABS.map((tab) => (
                        <button
                            key={tab.id}
                            className={"tab" + (activeTab === tab.id ? " tab--active" : "")}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {t(`${tab.key}.title`)}
                        </button>
                    ))}
                </div>

                <div className={styles["tab-content"] + " tab-content"}>
                    <ImageSlider key={activeTab} images={TAB_IMAGES[activeTab]} alt={title} />

                    <div className={styles["tab-text"]}>
                        <h3>{title}</h3>
                        {Object.entries(tabFields).map(([field, value]) => (
                            <div key={field} className={styles["tab-field"]} data-field={field}>
                                {Array.isArray(value)
                                    ? <ul>{value.map((item, index) => <li key={index}>{item}</li>)}</ul>
                                    : <p>{value}</p>}
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles["user-guide-footer"]}>
                    <div className={styles["user-guide-footer-item"] + " important-rules"}>
                        <h3>
                            <FontAwesomeIcon icon={faTriangleExclamation} />
                            {t('apartmentPage.userGuide.userGuideFooterRules.title')}
                        </h3>
                        <ul>
                            {t('apartmentPage.userGuide.userGuideFooterRules.list', { returnObjects: true }).map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles["user-guide-footer-item"] + " check-in-out"}>
                        <h3>
                            <FontAwesomeIcon icon={faClock} />
                            {t('apartmentPage.userGuide.userGuideFooterChecInOut.title')}
                        </h3>
                        <ul>
                            {t('apartmentPage.userGuide.userGuideFooterChecInOut.list', { returnObjects: true }).map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles["user-guide-footer-item"] + " contact"}>
                        <h3>
                            <FontAwesomeIcon icon={faPhone} />
                            {t('apartmentPage.userGuide.userGuideFooterContact.title')}
                        </h3>
                        <p>{t('apartmentPage.userGuide.userGuideFooterContact.text')}</p>
                        <a href="tel:+40767813197" className="btn btn-primary">
                            {t('apartmentPage.userGuide.userGuideFooterContact.phone')}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserGuide;
