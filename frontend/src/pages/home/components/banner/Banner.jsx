import hero from '../../../../assets/hero.jpg';
import heroMobile from '../../../../assets/hero-mobile.jpg';
import { useTranslation } from 'react-i18next';

import styles from "./Banner.module.css";

function Banner() {
  	const { t } = useTranslation();

  	return (
		<div className={styles.banner}>
			<picture>
				<source media="(max-width: 768px)" srcSet={heroMobile} />
				<img src={hero} alt="Hero" />
			</picture>

			<div  className={`container ${styles['container-banner']}`}>
				<div className={styles['banner-content']}>
					<span className={styles['banner-subtitle']}>{t("banner.subtitle")}</span>
					<h1>{t("banner.title")}</h1>    
					<p>{t("banner.body")}</p>
					<a href="https://www.booking.com/hotel/ro/shakespeare-central-apartment.html" target="_blank" rel="noopener noreferrer" className={`check-availability-btn ${styles['check-availability-btn-banner']}`}>
                        {t('bookingAvailability.checkAvailability')}
                    </a>
				</div>
			</div>
		</div>
  	);
}

export default Banner;