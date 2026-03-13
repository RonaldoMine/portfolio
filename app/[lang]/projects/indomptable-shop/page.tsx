import { getDictionary } from "@/get-dictionary";
import type { Locale } from "@/i18n-config";
import ClientPage from "./ClientPage";

export default async function IndomptableShop({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang as Locale);
  return <ClientPage dict={dict.indomptableShop} />;
}
