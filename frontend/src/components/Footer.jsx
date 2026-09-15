import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import Logo from "./logo/Logo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <Logo />
                    <div className="contact-info">
                        <p><FontAwesomeIcon icon={faLocationDot} /> Craiova, Romania</p>
                        <p><FontAwesomeIcon icon={faPhone} /> <a href="tel:+40767813197">+40 767 813 197</a></p>
                        <p><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:shakespeare.central.apartment@gmail.com">shakespeare.central.apartment@gmail.com</a></p>
                    </div>
                    <div className="social-media">
                        <a href="https://www.facebook.com/profile.php?id=61585732636429" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="https://www.instagram.com/shakespearecraiova/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-copyright">
                        <p>&copy; {new Date().getFullYear()} Shakespeare Central Apartment. {t('footer.copyright')}</p>
                    </div>

                    <div className="footer-links">
                        <Link to={`/${lang}/privacy-policy`}>{t('footer.link1')}</Link>
                        <Link to={`/${lang}/terms-and-conditions`}>{t('footer.link2')}</Link>
                        <Link to={`/${lang}/cookie-policy`}>{t('footer.link3')}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;