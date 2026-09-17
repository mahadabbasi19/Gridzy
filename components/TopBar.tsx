import { Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "./icons/SocialIcons";
import {
  ADDRESS_SHORT,
  EMAIL_INFO,
  PHONE_DISPLAY,
  PHONE_WHATSAPP_URL,
  SOCIAL_FACEBOOK_URL,
  SOCIAL_INSTAGRAM_URL,
} from "@/lib/contact";

export function TopBar() {
  return (
    <div className="hidden bg-deep-teal text-white lg:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5 text-xs">
        <div className="flex items-center gap-6 text-white/80">
          <span className="flex items-center gap-1.5">
            <MapPin size={13} className="text-amber" /> {ADDRESS_SHORT}
          </span>
          <a
            href={`mailto:${EMAIL_INFO}`}
            className="flex items-center gap-1.5 hover:text-amber transition-colors"
          >
            <Mail size={13} className="text-amber" /> {EMAIL_INFO}
          </a>
          <a
            href={PHONE_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-amber transition-colors"
          >
            <Phone size={13} className="text-amber" /> {PHONE_DISPLAY}
          </a>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 text-white/80">
            <a
              href={SOCIAL_FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-amber transition-colors"
            >
              <FacebookIcon width={14} height={14} />
            </a>
            <a
              href={SOCIAL_INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-amber transition-colors"
            >
              <InstagramIcon width={14} height={14} />
            </a>
          </div>
          <span className="h-3 w-px bg-white/20" />
          <span className="text-white/60">
            GRIDZY LTD
          </span>
        </div>
      </div>
    </div>
  );
}
