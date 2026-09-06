import { Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "./icons/SocialIcons";

export function TopBar() {
  return (
    <div className="hidden bg-deep-teal text-white lg:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5 text-xs">
        <div className="flex items-center gap-6 text-white/80">
          <span className="flex items-center gap-1.5">
            <MapPin size={13} className="text-amber" /> Karachi, Pakistan
          </span>
          <a
            href="mailto:sales@gridzy.dev"
            className="flex items-center gap-1.5 hover:text-amber transition-colors"
          >
            <Mail size={13} className="text-amber" /> sales@gridzy.dev
          </a>
          <span className="flex items-center gap-1.5">
            <Phone size={13} className="text-amber" /> +92 333 0000000
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 text-white/80">
            <a href="#" aria-label="Facebook" className="hover:text-amber transition-colors">
              <FacebookIcon width={14} height={14} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-amber transition-colors">
              <InstagramIcon width={14} height={14} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-amber transition-colors">
              <LinkedinIcon width={14} height={14} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-amber transition-colors">
              <TwitterIcon width={14} height={14} />
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
