import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

import Tabs from "../../components/tabs/Tabs";
import Lightbox from "../../components/lightbox/Lightbox";
import banner from "../../assets/gallery-banner.jpg";
import mobileBanner from "../../assets/gallery-banner-mobile.jpg";

import styles from "./Gallery.module.css";

const ALL_TAB_ID = "all";

// `excludeFromAll`: seasonal photos (e.g. Christmas decorations) get their own tab
// but are left out of "all", so they don't misrepresent the apartment off-season.
// A tab can be opened directly with ?tab=<id> (e.g. /ro/gallery?tab=christmas).
const CATEGORIES = [
    { id: "christmas", key: "galleryPage.categories.christmas", excludeFromAll: true },
    { id: "kitchen", key: "galleryPage.categories.kitchen" },
    { id: "living-room", key: "galleryPage.categories.livingRoom" },
    { id: "bedroom", key: "galleryPage.categories.bedroom" },
    { id: "bathroom", key: "galleryPage.categories.bathroom" },
    { id: "balcony", key: "galleryPage.categories.balcony" },
    { id: "hallway", key: "galleryPage.categories.hallway" },
    { id: "exterior", key: "galleryPage.categories.exterior" },
];

const CATEGORY_IMAGE_MODULES = import.meta.glob(
    "../../assets/gallery/*/*.{jpg,jpeg,png}",
    { eager: true, import: "default" }
);

// Only keep categories that already have photos (e.g. "exterior" has none yet).
const AVAILABLE_CATEGORIES = CATEGORIES
    .map((category) => ({
        ...category,
        images: Object.entries(CATEGORY_IMAGE_MODULES)
            .filter(([path]) => path.includes(`/gallery/${category.id}/`))
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([, src]) => src),
    }))
    .filter((category) => category.images.length > 0);

const TABS = AVAILABLE_CATEGORIES.length > 0
    ? [{ id: ALL_TAB_ID, key: "galleryPage.categories.all" }, ...AVAILABLE_CATEGORIES]
    : [];

function getImagesForTab(tabId) {
    if (tabId === ALL_TAB_ID) {
        return AVAILABLE_CATEGORIES
            .filter((category) => !category.excludeFromAll)
            .flatMap((category) =>
            category.images.map((src) => ({ src, categoryKey: category.key }))
        );
    }
    const category = AVAILABLE_CATEGORIES.find((c) => c.id === tabId);
    return category ? category.images.map((src) => ({ src, categoryKey: category.key })) : [];
}

function Gallery() {
    const { t } = useTranslation();
    const [searchParams] = useSearchParams();
    const requestedTab = searchParams.get("tab");
    const [activeTab, setActiveTab] = useState(
        TABS.some((tab) => tab.id === requestedTab) ? requestedTab : TABS[0]?.id
    );
    const [lightboxIndex, setLightboxIndex] = useState(null);

    const activeImages = getImagesForTab(activeTab).map((image) => ({
        src: image.src,
        alt: t(image.categoryKey),
    }));

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
        setLightboxIndex(null);
    };

    return (
        <div className={styles["gallery-page"]}>
            <div className={styles["gallery-banner"]}>
                <picture>
                    <source media="(max-width: 768px)" srcSet={mobileBanner} />
                    <img src={banner} alt="Gallery Banner" />
                </picture>

                <div className={styles["container"] + " container"}>
                    <div className={styles["banner-content"]}>
                        <h1>{t("galleryPage.title")}</h1>
                        <p>{t("galleryPage.description")}</p>
                    </div>
                </div>
            </div>

            <div className={styles["gallery-section"]}>
                <div className={styles["container"] + " container"}>
                    {TABS.length > 0 && (
                        <>
                            <Tabs
                                tabs={TABS.map((tab) => ({ id: tab.id, label: t(tab.key) }))}
                                activeTab={activeTab}
                                onChange={handleTabChange}
                            />

                            <div className={styles["gallery-grid"]}>
                                {activeImages.map((image, index) => (
                                    <button
                                        key={image.src}
                                        type="button"
                                        className={styles["gallery-grid-item"]}
                                        onClick={() => setLightboxIndex(index)}
                                    >
                                        <img src={image.src} alt={`${image.alt} ${index + 1}`} loading="lazy" />
                                    </button>
                                ))}
                            </div>

                            {lightboxIndex !== null && (
                                <Lightbox
                                    images={activeImages}
                                    activeIndex={lightboxIndex}
                                    onNavigate={setLightboxIndex}
                                    onClose={() => setLightboxIndex(null)}
                                />
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
