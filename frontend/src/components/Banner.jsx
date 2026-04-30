import hero from '../assets/hero.jpg';
import { useTranslation } from 'react-i18next';

function Banner() {
  const { t } = useTranslation();

  return (
    <div className="banner">
      <img src={hero} alt="Hero" width="1920" height="603" />
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