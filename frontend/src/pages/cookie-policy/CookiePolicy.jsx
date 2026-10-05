import LegalContent from "../../components/LegalContent/LegalContent";

import contentRo from "../../content/legal/cookie-policy.ro.md?raw";
import contentEn from "../../content/legal/cookie-policy.en.md?raw";
import contentBg from "../../content/legal/cookie-policy.bg.md?raw";
import contentSr from "../../content/legal/cookie-policy.sr.md?raw";

function CookiePolicy() {
    return <LegalContent content={{ ro: contentRo, en: contentEn, bg: contentBg, sr: contentSr }} />;
}

export default CookiePolicy;
