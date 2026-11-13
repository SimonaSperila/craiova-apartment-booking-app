import { getActiveBanner } from "../../utils/temporaryBanners";

// Seasonal landing page for the Craiova Christmas Market.
// While `enabled` is true and `expiresOn` hasn't passed (local time, valid
// through the end of that day), the festive link is shown in the header menu.
// After that the link disappears automatically; the route itself stays
// reachable so old shared links don't break.
export const CHRISTMAS_MARKET = {
    id: "christmas-market-2026",
    enabled: true,
    expiresOn: "2027-01-04",
    path: "christmas-market"
};

export function isChristmasMarketActive() {
    return getActiveBanner([CHRISTMAS_MARKET]) !== null;
}
