import LegalContent from "../../components/LegalContent/LegalContent";

import contentRo from "../../content/legal/cookie-policy.ro.md?raw";
import contentEn from "../../content/legal/cookie-policy.en.md?raw";

function CookiePolicy() {
    return <LegalContent contentRo={contentRo} contentEn={contentEn} />;
}

export default CookiePolicy;
