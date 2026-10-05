import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useTranslation } from "react-i18next";
import { useBodyClass } from "../../hooks/useBodyClass";

import styles from "./LegalContent.module.css";

function LegalContent({ content: contentByLang }) {
    useBodyClass("page-legal");
    const { i18n } = useTranslation();
    const content = contentByLang[i18n.language] || contentByLang.ro;

    return (
        <section className={styles["legal-page"]}>
            <div className="container">
                <div className={styles["legal-content"]}>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
                </div>
            </div>
        </section>
    );
}

export default LegalContent;
