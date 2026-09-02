import puppetsBanner from "../../assets/puppets-banner.png";

// Temporary banners for the Events page hero.
// Toggle an entry's `enabled` flag to swap it in for the default banner.
// The first entry with `enabled: true` that hasn't expired wins; when none
// qualify, the default banner defined in Events.jsx is used.
// `expiresOn` is optional — an ISO date string ("YYYY-MM-DD"). Once that date
// has fully passed (local time), the banner is treated as disabled
// automatically, no need to flip `enabled` back to false by hand.
// To add another temporary banner in the future, just add a new entry here.
export const TEMPORARY_BANNERS = [
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

function isExpired(banner) {
    if (!banner.expiresOn) return false;

    // Treat expiresOn as "valid through the end of this day" in local time.
    const expiry = new Date(`${banner.expiresOn}T23:59:59.999`);
    return Date.now() > expiry.getTime();
}

export function getActiveTemporaryBanner() {
    return TEMPORARY_BANNERS.find(banner => banner.enabled && !isExpired(banner)) || null;
}
