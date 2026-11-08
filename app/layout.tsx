import type { Metadata } from "next";
import { PreferencesProvider } from "@/app/components/preferences";
import "./globals.css";

export const metadata: Metadata = {
  title: "SANA — кино под настроение",
  description:
    "Открой AI-фильмы и короткие визуальные истории. Подбери кино под своё настроение на SANA AI Cinema.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body><PreferencesProvider>{children}</PreferencesProvider></body>
    </html>
  );
}
