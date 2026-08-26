import puppetsBanner from "../../assets/puppets-banner.png";

// Temporary banners for the Events page hero.
// Toggle an entry's `enabled` flag to swap it in for the default banner.
// The first entry with `enabled: true` wins; when none are enabled, the
// default banner defined in Events.jsx is used.
// To add another temporary banner in the future, just add a new entry here.
export const TEMPORARY_BANNERS = [
    {
        id: "puppets-2026",
        enabled: true,
        image: puppetsBanner,
        alt: "Stardust 2026 Events Banner",
        titleKey: "eventsPage.temporaryBanners.puppets.title",
        subtitleKey: "eventsPage.temporaryBanners.puppets.subtitle",
        descriptionKey: "eventsPage.temporaryBanners.puppets.description",
        dateKey: "eventsPage.temporaryBanners.puppets.date"
    },
];

export function getActiveTemporaryBanner() {
    return TEMPORARY_BANNERS.find(banner => banner.enabled) || null;
}
