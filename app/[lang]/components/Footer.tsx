import Link from "next/link";
import ContactButtonComponent from "../(home)/components/ContactButtonComponent";

export default function Footer({ dict, lang, contactText }: { dict?: any, lang?: string, contactText?: string }) {
  return (
    <footer className="border-t border-white border-opacity-20 pt-10 pb-4 flex flex-col items-center gap-6">
      <p className="text-center text-gray-300">
        <span>🙂</span> <br />
        {dict ? dict.talk : "Let us discuss about you, our next partnership, job proposition or whatever."}
      </p>
      <ContactButtonComponent text={contactText} />
      <div className="flex flex-wrap gap-4 text-gray-300">
        <Link href={lang ? `/${lang}` : "/"} aria-label="Home Page">
          {dict ? dict.home : "Home"}
        </Link>
        <Link href={lang ? `/${lang}/experience` : "/experience"} aria-label="Experience Page">
          {dict ? dict.experience : "Experience"}
        </Link>
        <Link href={lang ? `/${lang}/about` : "/about"} aria-label="About Page">
          {dict ? dict.about : "About"}
        </Link>
      </div>
    </footer>
  );
}
