import { useTranslation } from 'react-i18next';
import Logo from "./Logo";

function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <Logo />
                    <span className="vertical-border"></span>
                    <div className="contact-info">
                        <p>{t('footer.contact')}</p>
                        <p>Email: <a href="mailto:info@shakespearecentral.ro">info@shakespearecentral.ro</a></p>
                    </div>
                    <div className="social-media">
                        <a href="https://www.facebook.com/shakespearecentralapartment" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://www.instagram.com/shakespearecentralapartment/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
                    <p>{t('footer.rights')}</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer 