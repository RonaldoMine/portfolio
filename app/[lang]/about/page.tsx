import { getDictionary } from "@/get-dictionary";
import type { Locale } from "@/i18n-config";
import AboutClient from "./AboutClient";

export default async function About({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang as Locale);
  return <AboutClient dict={dict.about} />;
}
