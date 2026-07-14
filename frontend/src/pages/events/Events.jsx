import banner from "../../assets/events-banner.jpg";

import styles from "./Events.module.css";

function Events() {
    return(
        <div className={styles["events-page"]}>
            <div className={styles["events-banner"]}>
                <picture>
                    <source media="(max-width: 768px)" srcSet={banner} />
                    <img src={banner} alt="Events Banner" />
                </picture>
            </div>
        </div>
    );
}

export default Events;