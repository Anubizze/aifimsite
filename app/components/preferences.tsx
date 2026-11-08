"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Locale = "ru" | "kk" | "en";
type Preferences = { locale: Locale; setLocale: (locale: Locale) => void; theme: "light" | "dark"; toggleTheme: () => void };
const Context = createContext<Preferences | null>(null);

export function PreferencesProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("ru");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  useEffect(() => {
    const savedLocale = localStorage.getItem("sana-locale");
    const savedTheme = localStorage.getItem("sana-theme");
    if (savedLocale === "ru" || savedLocale === "kk" || savedLocale === "en") setLocale(savedLocale);
    if (savedTheme === "light" || savedTheme === "dark") setTheme(savedTheme);
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.lang = locale === "kk" ? "kk" : locale;
    localStorage.setItem("sana-theme", theme);
    localStorage.setItem("sana-locale", locale);
  }, [theme, locale]);
  const value = useMemo(() => ({ locale, setLocale, theme, toggleTheme: () => setTheme((current) => current === "light" ? "dark" : "light") }), [locale, theme]);
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function usePreferences() {
  const value = useContext(Context);
  if (!value) throw new Error("usePreferences must be used inside PreferencesProvider");
  return value;
}
