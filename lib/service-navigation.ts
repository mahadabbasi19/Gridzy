const projectCategories: Record<string, string> = {
  "website-development": "Website Development",
  "mobile-app-development": "Mobile App Development",
  "desktop-application-development": "Desktop Application",
  "custom-software-development": "Custom Software",
  "ai-automations": "Artificial Intelligence",
  "custom-chatbots": "Artificial Intelligence",
  "graphics-brand-design": "Design",
};

export function servicePortfolioHref(service?: string) {
  const category = service ? projectCategories[service] : undefined;
  return category
    ? `/portfolio/?category=${encodeURIComponent(category)}#portfolio-results`
    : "/portfolio/#portfolio-results";
}
