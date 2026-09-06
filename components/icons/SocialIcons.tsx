import { SVGProps } from "react";

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 8.5H3.56V20.5H6.94V8.5ZM5.25 3.5A1.94 1.94 0 1 0 5.27 7.38 1.94 1.94 0 0 0 5.25 3.5ZM20.44 20.5H17.06v-6.32c0-1.5-.03-3.44-2.1-3.44-2.11 0-2.43 1.65-2.43 3.34v6.42H9.15V8.5h3.24v1.64h.05c.45-.85 1.56-1.75 3.2-1.75 3.42 0 4.8 2.25 4.8 5.18v7.13Z" />
    </svg>
  );
}

export function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.9 6.1c-.63.29-1.31.48-2.02.57a3.53 3.53 0 0 0 1.54-1.95 6.98 6.98 0 0 1-2.24.86 3.53 3.53 0 0 0-6 3.22A10 10 0 0 1 4.9 4.9a3.52 3.52 0 0 0 1.09 4.7 3.5 3.5 0 0 1-1.6-.44v.05a3.53 3.53 0 0 0 2.83 3.46 3.55 3.55 0 0 1-1.59.06 3.53 3.53 0 0 0 3.3 2.45 7.08 7.08 0 0 1-5.22 1.46 9.98 9.98 0 0 0 5.4 1.58c6.48 0 10.02-5.37 10.02-10.02l-.01-.46A7.2 7.2 0 0 0 21 5.03a7.1 7.1 0 0 1-2.02.55A3.5 3.5 0 0 0 20.9 6.1Z" />
    </svg>
  );
}
