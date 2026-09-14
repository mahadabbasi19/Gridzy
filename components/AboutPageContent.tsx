import { AboutCTA } from "./AboutCTA";
import { AboutPillars } from "./AboutPillars";
import { AboutTimeline } from "./AboutTimeline";
import { AboutValues } from "./AboutValues";

export function AboutPageContent() {
  return (
    <>
      <AboutPillars />
      <AboutTimeline />
      <AboutValues />
      <AboutCTA />
    </>
  );
}
