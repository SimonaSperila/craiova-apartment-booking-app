import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import UnderConstructionImg from "../../assets/under-construction.svg";
import styles from "./UnderConstruction.module.css";

function UnderConstruction({ page }) {
	const { t, i18n } = useTranslation();
	const lang = i18n.language;

	return (
		<section className={styles["under-construction"]}>
			<div className="container">
				<img
					src={UnderConstructionImg}
					alt={t("underConstruction.imageAlt")}
					className={styles["under-construction-image"]}
				/>

				{page && <span className="small-title">{page}</span>}
				<h1>{t("underConstruction.title")}</h1>
				<p className={styles["under-construction-text"]}>{t("underConstruction.message")}</p>

				<Link to={`/${lang}`} className="btn btn-primary">
					{t("underConstruction.cta")}
				</Link>
			</div>
		</section>
	);
}

export default UnderConstruction;
