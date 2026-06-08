import { useTranslation } from 'react-i18next';
import styles from "./ApartmentDetails.module.css";

function ApartmentDetails() {
    const { t } = useTranslation();

    return (
        <div className="apartment-details-page">
            <div className={styles["container"] + " container"}>
                <div className={styles["apartment-details-left"]}>
                    <h2>{t('apartmentPage.apartmentDetailsLeft.title')}</h2>
                    <p>{t('apartmentPage.apartmentDetailsLeft.description')}</p>
                    <ul>
                        <li>{t('apartmentPage.apartmentDetailsLeft.list.0')}</li>
                        <li>{t('apartmentPage.apartmentDetailsLeft.list.1')}</li>
                        <li>{t('apartmentPage.apartmentDetailsLeft.list.2')}</li>
                        <li>{t('apartmentPage.apartmentDetailsLeft.list.3')}</li>
                        <li>{t('apartmentPage.apartmentDetailsLeft.list.4')}</li>
                        <li>{t('apartmentPage.apartmentDetailsLeft.list.5')}</li>
                        <li>{t('apartmentPage.apartmentDetailsLeft.list.6')}</li>
                        <li>{t('apartmentPage.apartmentDetailsLeft.list.7')}</li>
                        <li>{t('apartmentPage.apartmentDetailsLeft.list.8')}</li>
                    </ul>
                </div>

                <div className={styles["apartment-details-right"]}>
                    
                </div>
            </div>
        </div>
    );
}   

export default ApartmentDetails;