// Email addresses. EMAIL_INFO is the general/default address shown
// anywhere generic (top bar, footer). EMAIL_SALES is the one shown as
// the primary contact on the Contact page and for new-project/quote
// inquiries. EMAIL_SUPPORT is for existing clients.
export const EMAIL_INFO = "info@gridzy.dev";
export const EMAIL_SALES = "sales@gridzy.dev";
export const EMAIL_SUPPORT = "support@gridzy.dev";
// Where the contact form's inquiry submissions are delivered — not
// shown anywhere on the page, just the mail handler's destination.
export const EMAIL_RESPONSE = "response@gridzy.dev";

// Server-side endpoint that actually sends the inquiry email. The site
// is a static export (no Node server at runtime), so this is a plain
// PHP script — see public/contact-handler.php — that next build copies
// into the export verbatim and cPanel's Apache/PHP serves directly.
export const CONTACT_FORM_ENDPOINT = "/contact-handler.php";

// Single source of truth for the phone number shown across the site.
// Every phone link below opens a WhatsApp chat rather than a bare tel:
// link, since that's how the team actually wants to be reached.
export const PHONE_DISPLAY = "+92 325 2997076";
export const PHONE_WHATSAPP_URL = "https://wa.me/923252997076";

// Office location — resolved from the user's own Google Maps share link
// (https://maps.app.goo.gl/vbAjnN121kdPFfop8) to the exact coordinates,
// so the embedded map and "Get Directions" link both point at the real
// pin rather than a generic city-level search.
export const ADDRESS_SHORT = "Bahria Town, Karachi";
export const ADDRESS_FULL = "Bahria Town Karachi, Karachi, Pakistan";
export const MAP_COORDS = { lat: 25.0239397, lng: 67.3145948 };
export const MAP_EMBED_URL = `https://www.google.com/maps?q=${MAP_COORDS.lat},${MAP_COORDS.lng}&z=15&output=embed`;
export const MAP_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${MAP_COORDS.lat},${MAP_COORDS.lng}`;

// Social profiles. Instagram and Facebook are the only two active
// accounts — every social link on the site should point at exactly
// these two, nothing else.
export const SOCIAL_INSTAGRAM_URL =
  "https://www.instagram.com/gridzy.dev?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==";
export const SOCIAL_FACEBOOK_URL = "https://www.facebook.com/thegridzy";
