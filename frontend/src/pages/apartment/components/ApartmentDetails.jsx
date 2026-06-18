import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartArea,  faUserGroup, faBed, faCouch, faUtensils, faShower, faBuilding, faMountainCity, faWifi, faSnowflake, faTv, faKitchenSet, faMugHot, faFan, faShoePrints, faMugSaucer, faSquareParking} from '@fortawesome/free-solid-svg-icons';
import styles from "./ApartmentDetails.module.css";

function ApartmentDetails() {
    const { t } = useTranslation();

    const icons = {
        area: faChartArea,
        users: faUserGroup,
        bed: faBed,
        couch: faCouch,
        utensils: faUtensils,
        shower: faShower,
        building: faBuilding,
        balcony: faMountainCity,
        wifi: faWifi,
        ac: faSnowflake,
        tv: faTv,
        kitchen: faKitchenSet,
        coffee: faMugHot,
        hairdryer: faFan,
        slippers: faShoePrints,
        kettle: faMugSaucer,
        parking: faSquareParking
    };

    const detailsListLeft = t(
        'apartmentPage.apartmentDetailsLeft.list',
        { returnObjects: true }
    );

    const detailsListRight = t(
        'apartmentPage.apartmentDetailsRight.list',
        { returnObjects: true }
    );

    return (
        <div className={styles["apartment-details-page"]}>
            <div className={styles["apartment-details-container"] + " container"}>
                <div className={styles["apartment-details-left"]}>
                    <h2>{t('apartmentPage.apartmentDetailsLeft.title')}</h2>
                    <p>{t('apartmentPage.apartmentDetailsLeft.description')}</p>
                    <ul>
                        {detailsListLeft.map((item, index) => (
                            <li key={index}>
                                <FontAwesomeIcon icon={icons[item.icon]} />
                                <span>{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles["apartment-details-right"]}>
                    {detailsListRight.map((item, index) => (
                        <div className={styles["apartment-details-right-item"]} key={index}>
                            <FontAwesomeIcon icon={icons[item.icon]} />
                            <span>{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}   

export default ApartmentDetails;