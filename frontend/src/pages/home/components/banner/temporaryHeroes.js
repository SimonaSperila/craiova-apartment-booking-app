import { getActiveBanner } from "../../../../utils/temporaryBanners";

// Temporary (seasonal) content for the Home page hero.
// The first entry with `enabled: true` that hasn't expired replaces the default
// hero text; when none qualify, the default hero from Banner.jsx is shown.
// `expiresOn` is optional — "YYYY-MM-DD", valid through the end of that day.
// `image` / `mobileImage` are optional — imported images (or { ro, en, bg, sr } maps);
// when missing, the default hero images are kept.
// `className` is optional — a class from Banner.module.css added to the hero
// wrapper (next to `banner`) for hero-specific styling.
// `subtitleKey` / `titleKey` / `bodyKey` / `ctaKey` are translation keys.
// `ctaPath` is the in-site path (without the language prefix) the extra button links to.
export const TEMPORARY_HEROES = [
    {
        id: "christmas-2026",
        enabled: true,
        expiresOn: "2027-01-04",
        className: "christmas-2026",
        subtitleKey: "banner.christmas.subtitle",
        titleKey: "banner.christmas.title",
        bodyKey: "banner.christmas.body",
        ctaKey: "banner.christmas.cta",
        ctaPath: "gallery?tab=christmas"
    },
];

export function getActiveTemporaryHero() {
    return getActiveBanner(TEMPORARY_HEROES);
}
