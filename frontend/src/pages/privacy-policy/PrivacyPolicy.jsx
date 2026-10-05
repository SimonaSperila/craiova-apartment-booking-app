import LegalContent from "../../components/LegalContent/LegalContent";

import contentRo from "../../content/legal/privacy-policy.ro.md?raw";
import contentEn from "../../content/legal/privacy-policy.en.md?raw";
import contentBg from "../../content/legal/privacy-policy.bg.md?raw";
import contentSr from "../../content/legal/privacy-policy.sr.md?raw";

function PrivacyPolicy() {
    return <LegalContent content={{ ro: contentRo, en: contentEn, bg: contentBg, sr: contentSr }} />;
}

export default PrivacyPolicy;
