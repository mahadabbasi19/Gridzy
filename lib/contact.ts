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
