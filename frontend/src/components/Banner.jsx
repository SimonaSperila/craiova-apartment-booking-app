import hero from '../assets/hero.jpg';
import heroMobile from '../assets/hero-mobile.jpg';
import { useTranslation } from 'react-i18next';

function Banner() {
  	const { t } = useTranslation();

  	return (
		<div className="banner">
			<picture>
				<source media="(max-width: 768px)" srcSet={heroMobile} />
				<img src={hero} alt="Hero" />
			</picture>

			<div className="container">
				<div className='banner-content'>
					<span className="banner-subtitle">{t("banner.subtitle")}</span>
					<h1>{t("banner.title")}</h1>    
					<p>{t("banner.body")}</p>
				</div>
			</div>
		</div>
  	);
}

export default Banner;