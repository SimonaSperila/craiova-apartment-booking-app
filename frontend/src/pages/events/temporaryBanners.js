import { getActiveBanner, localizedBannerValue } from "../../utils/temporaryBanners";
import puppetsBanner from "../../assets/puppets-banner.png";
import christmasMarketBannerRo from "../../assets/christmas-market-2026.jpg";
import christmasMarketBannerEn from "../../assets/christmas-market-2026-en.jpg";
import christmasMarketBannerBg from "../../assets/christmas-market-2026-bg.jpg";
import christmasMarketBannerSr from "../../assets/christmas-market-2026-sr.jpg";
import christmasMarketBannerMobileRo from "../../assets/christmas-market-2026-mobile.jpg";
import christmasMarketBannerMobileEn from "../../assets/christmas-market-2026-mobile-en.jpg";
import christmasMarketBannerMobileBg from "../../assets/christmas-market-2026-mobile-bg.jpg";
import christmasMarketBannerMobileSr from "../../assets/christmas-market-2026-mobile-sr.jpg";

// Temporary banners for the Events page hero.
// Toggle an entry's `enabled` flag to swap it in for the default banner.
// The first entry with `enabled: true` that hasn't expired wins; when none
// qualify, the default banner defined in Events.jsx is used.
// `expiresOn` is optional — an ISO date string ("YYYY-MM-DD"). Once that date
// has fully passed (local time), the banner is treated as disabled
// automatically, no need to flip `enabled` back to false by hand.
// `mobileImage` is optional — used for screens up to 768px wide; falls back to `image`.
// `className` is optional — a class from Events.module.css added to the banner
// wrapper (next to `events-banner`) for banner-specific styling.
// `image`, `mobileImage` and `alt` can be a single value or an object keyed by
// language ({ ro, en, bg, sr }) for banners with text baked into the image;
// a missing language falls back to `ro`.
// To add another temporary banner in the future, just add a new entry here.
export const TEMPORARY_BANNERS = [
    {
        id: "christmas-market-2026",
        enabled: true,
        expiresOn: "2027-01-04",
        image: {
            ro: christmasMarketBannerRo,
            en: christmasMarketBannerEn,
            bg: christmasMarketBannerBg,
            sr: christmasMarketBannerSr
        },
        mobileImage: {
            ro: christmasMarketBannerMobileRo,
            en: christmasMarketBannerMobileEn,
            bg: christmasMarketBannerMobileBg,
            sr: christmasMarketBannerMobileSr
        },
        className: "christmas-market-2026",
        alt: {
            ro: "Târgul de Crăciun din Craiova - 13 noiembrie 2026",
            en: "Craiova Christmas Market - 13 November 2026",
            bg: "Коледен базар в Крайова - 13 ноември 2026",
            sr: "Božićni sajam u Krajovi - 13. novembar 2026."
        }
        // No title/subtitle/description/date keys: the image already carries its own text.
    },
    {
        id: "puppets-2026",
        enabled: true,
        expiresOn: "2026-09-01",
        link: "https://puppetsoccupystreet.ro/2026/08/16/program-stardust-edition-2026/",
        image: puppetsBanner,
        alt: "Stardust 2026 Events Banner",
        titleKey: "eventsPage.temporaryBanners.puppets.title",
        subtitleKey: "eventsPage.temporaryBanners.puppets.subtitle",
        descriptionKey: "eventsPage.temporaryBanners.puppets.description",
        dateKey: "eventsPage.temporaryBanners.puppets.date"
    },
];

export { localizedBannerValue };

export function getActiveTemporaryBanner() {
    return getActiveBanner(TEMPORARY_BANNERS);
}
