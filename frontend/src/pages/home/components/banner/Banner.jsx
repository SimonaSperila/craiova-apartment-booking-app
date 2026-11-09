import hero from '../../../../assets/hero.jpg';
import heroMobile from '../../../../assets/hero-mobile.jpg';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { localizedBannerValue } from '../../../../utils/temporaryBanners';
import { getActiveTemporaryHero } from './temporaryHeroes';

import styles from "./Banner.module.css";

function Banner() {
  	const { t, i18n } = useTranslation();
	const lang = i18n.language;

	const temporaryHero = getActiveTemporaryHero();
	const heroSrc = localizedBannerValue(temporaryHero?.image, lang) || hero;
	const heroMobileSrc = localizedBannerValue(temporaryHero?.mobileImage, lang) || (temporaryHero?.image ? heroSrc : heroMobile);
	const subtitle = t(temporaryHero?.subtitleKey || "banner.subtitle");
	const title = t(temporaryHero?.titleKey || "banner.title");
	const body = t(temporaryHero?.bodyKey || "banner.body");

  	return (
		<div className={[styles.banner, temporaryHero?.className && styles[temporaryHero.className]].filter(Boolean).join(" ")}>
			<picture>
				<source media="(max-width: 768px)" srcSet={heroMobileSrc} />
				<img src={heroSrc} alt="Hero" />
			</picture>

			<div  className={`container ${styles['container-banner']}`}>
				<div className={styles['banner-content']}>
					<span className={styles['banner-subtitle']}>{subtitle}</span>
					<h1>{title}</h1>
					<p>{body}</p>
					<div className={styles['banner-actions']}>
						{temporaryHero?.ctaKey && temporaryHero?.ctaPath && (
							<Link to={`/${lang}/${temporaryHero.ctaPath}`} className={`btn btn-primary ${styles['banner-cta']}`}>
								{t(temporaryHero.ctaKey)}
							</Link>
						)}
						<a href="https://www.booking.com/hotel/ro/shakespeare-central-apartment.html" target="_blank" rel="noopener noreferrer" className={`check-availability-btn ${styles['check-availability-btn-banner']}`}>
							{t('bookingAvailability.checkAvailability')}
						</a>
					</div>
				</div>
			</div>
		</div>
  	);
}

export default Banner;
