// Shared helpers for seasonal/temporary banners (Events page hero, Home hero).

// `expiresOn` is optional — an ISO date string ("YYYY-MM-DD"). Once that date
// has fully passed (local time), the banner is treated as disabled.
function isExpired(banner) {
    if (!banner.expiresOn) return false;

    // Treat expiresOn as "valid through the end of this day" in local time.
    const expiry = new Date(`${banner.expiresOn}T23:59:59.999`);
    return Date.now() > expiry.getTime();
}

// The first entry with `enabled: true` that hasn't expired, or null.
export function getActiveBanner(banners) {
    return banners.find(banner => banner.enabled && !isExpired(banner)) || null;
}

// Resolves a banner field that is either a plain value or a { ro, en, bg, sr } map.
// A missing language falls back to `ro`.
export function localizedBannerValue(value, lang) {
    if (value && typeof value === "object") {
        return value[lang] || value.ro;
    }
    return value;
}
