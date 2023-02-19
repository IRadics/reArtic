export type Theme = "light" | "dark";

const localStorageKey = "reartic_theme";

export const getTheme = (): Theme => {
  const saved = localStorage.getItem(localStorageKey);

  if (saved && ["light", "dark"].includes(saved)) return saved as Theme;

  const browserDarkPreferred =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (browserDarkPreferred) return "dark";
  return "light";
};

export const setTheme = (theme: Theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(localStorageKey, theme);
};
