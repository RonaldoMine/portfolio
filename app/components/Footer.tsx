import Link from "next/link";
import ContactButtonComponent from "../(home)/components/ContactButtonComponent";

export default function Footer() {
  return (
    <footer className="border-t border-white border-opacity-20 pt-10 pb-4 flex flex-col items-center gap-6">
      <p className="text-center text-gray-300">
        <span>🙂</span> <br />
        Let us disuss about you, our next partnership, job proposition or what
        ever.
      </p>
      <ContactButtonComponent />
      <div className="flex flex-wrap gap-4 text-gray-300">
        <Link href="/" aria-label="Home Page">
          Home
        </Link>
        <Link href="/experience" aria-label="Experience Page">
          Experience
        </Link>
        <Link href="/about" aria-label="About Page">
          About
        </Link>
      </div>
    </footer>
  );
}
