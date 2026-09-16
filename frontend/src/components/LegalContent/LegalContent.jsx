import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useTranslation } from "react-i18next";
import { useBodyClass } from "../../hooks/useBodyClass";

import styles from "./LegalContent.module.css";

function LegalContent({ contentRo, contentEn }) {
    useBodyClass("page-legal");
    const { i18n } = useTranslation();
    const content = i18n.language === "en" ? contentEn : contentRo;

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
