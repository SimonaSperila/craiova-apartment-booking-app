import { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation, faClock, faPhone } from '@fortawesome/free-solid-svg-icons';
import ImageSlider from '../../../../components/slider/ImageSlider';
import TextSlider from '../../../../components/slider/TextSlider';
import Tabs from '../../../../components/tabs/Tabs';
import styles from "./UserGuide.module.css";

const TABS = [
    { id: "coffee-machine", key: "apartmentPage.userGuide.tabs.coffeeMachine", slider: true },
    { id: "heating", key: "apartmentPage.userGuide.tabs.heating" },
    { id: "air-conditioning", key: "apartmentPage.userGuide.tabs.airConditioning" },
    { id: "smart-tv", key: "apartmentPage.userGuide.tabs.smartTv" }
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

// Renders a translated field; strings may contain basic HTML tags (<strong>, <i>, <br/>), parsed by <Trans>.
function GuideField({ value, i18nKey }) {
    const hasTitledText = value && typeof value === 'object' && !Array.isArray(value) && 'text' in value;
    const content = hasTitledText ? value.text : value;
    const contentKey = hasTitledText ? `${i18nKey}.text` : i18nKey;

    return (
        <>
            {hasTitledText && value.title && <h4 className={styles["guide-field-title"]}><Trans i18nKey={`${i18nKey}.title`} /></h4>}
            {Array.isArray(content)
                ? <ul>{content.map((_, index) => <li key={index}><Trans i18nKey={`${contentKey}.${index}`} /></li>)}</ul>
                : <p><Trans i18nKey={contentKey} /></p>}
        </>
    );
}

function UserGuide() {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState(TABS[0].id);
    const activeTabConfig = TABS.find((tab) => tab.id === activeTab);
    const { title, subtitle, ...tabFields } = t(activeTabConfig.key, { returnObjects: true });
    const activeImage = TAB_IMAGES[activeTab][0];

    return (
        <div className="container">
            <div className={styles["user-guide-section"]}>
                <h2>{t('apartmentPage.userGuide.title')}</h2>
                <p>{t('apartmentPage.userGuide.description')}</p>

                <Tabs
                    tabs={TABS.map((tab) => ({ id: tab.id, label: t(`${tab.key}.title`) }))}
                    activeTab={activeTab}
                    onChange={setActiveTab}
                />

                {activeTabConfig.slider ? (
                    <div className={styles["tab-content"] + " tab-content"} data-tab={activeTab}>
                        <ImageSlider key={`image-${activeTab}`} images={TAB_IMAGES[activeTab]} alt={title} />
                        <TextSlider
                            key={`text-${activeTab}`}
                            fields={Object.entries(tabFields)}
                            showArrows={false}
                            renderField={(field, value) => (
                                <GuideField value={value} i18nKey={`${activeTabConfig.key}.${field}`} />
                            )}
                        />
                    </div>
                ) : (
                    <div className={styles["tab-content"] + (activeImage ? "" : " " + styles["tab-content--text-only"]) + " tab-content"} data-tab={activeTab}>
                        {activeImage && <img className={styles["tab-image"]} src={activeImage} alt={title} />}
                        <div className={styles["tab-text"]}>
                            {Object.entries(tabFields).map(([field, value]) => (
                                <div key={field} className={styles["guide-field"]} data-field={field}>
                                    <GuideField value={value} i18nKey={`${activeTabConfig.key}.${field}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

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
