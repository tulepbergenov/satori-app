const baseTitle = "Satori";

export const appTitle = (title?: string): string =>
  title && typeof title === "string" && title.trim().length !== 0
    ? `${title} | ${baseTitle}`
    : baseTitle;
