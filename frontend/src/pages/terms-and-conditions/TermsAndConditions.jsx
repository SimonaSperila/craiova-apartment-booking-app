import LegalContent from "../../components/LegalContent/LegalContent";

import contentRo from "../../content/legal/terms-and-conditions.ro.md?raw";
import contentEn from "../../content/legal/terms-and-conditions.en.md?raw";

function TermsAndConditions() {
    return <LegalContent contentRo={contentRo} contentEn={contentEn} />;
}

export default TermsAndConditions;
