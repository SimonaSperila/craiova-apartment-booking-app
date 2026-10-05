import LegalContent from "../../components/LegalContent/LegalContent";

import contentRo from "../../content/legal/terms-and-conditions.ro.md?raw";
import contentEn from "../../content/legal/terms-and-conditions.en.md?raw";
import contentBg from "../../content/legal/terms-and-conditions.bg.md?raw";
import contentSr from "../../content/legal/terms-and-conditions.sr.md?raw";

function TermsAndConditions() {
    return <LegalContent content={{ ro: contentRo, en: contentEn, bg: contentBg, sr: contentSr }} />;
}

export default TermsAndConditions;
