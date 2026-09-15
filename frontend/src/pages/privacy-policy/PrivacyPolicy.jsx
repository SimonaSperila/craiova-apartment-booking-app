import LegalContent from "../../components/LegalContent/LegalContent";

import contentRo from "../../content/legal/privacy-policy.ro.md?raw";
import contentEn from "../../content/legal/privacy-policy.en.md?raw";

function PrivacyPolicy() {
    return <LegalContent contentRo={contentRo} contentEn={contentEn} />;
}

export default PrivacyPolicy;
