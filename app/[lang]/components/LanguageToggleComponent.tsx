"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { i18n } from "@/i18n-config";

export default function LanguageToggle({ currentLang }: { currentLang: string }) {
  const pathname = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="flex gap-2 text-white">
      {i18n.locales.map((locale) => {
        return (
          <Link
            key={locale}
            href={redirectedPathName(locale)}
            className={`uppercase text-sm font-bold ${
              currentLang === locale ? "text-red" : "text-white"
            } hover:text-red transition-colors`}
          >
            {locale}
          </Link>
        );
      })}
    </div>
  );
}
