import { FaLinkedinIn } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { VscGithub } from "react-icons/vsc";
import Link from "next/link";

export default function ContactButtonComponent() {
  return (
    <section className="bg-red p-3 w-36 relative text-center cursor-pointer group">
      <span className="w-full">Contact me</span>
      <div className="absolute h-full flex justify-between items-center gap-5 bg-white z-1 inset-0 w-0  transition-all duration-700 group-hover:w-full group-hover:p-3">
        <Link aria-label="LinkedIn Profile"
          href={"https://linkedin.com/in/ronaldo-mine-764b59195"}
          target="_blank"
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        >
          <FaLinkedinIn size={"24"} className="fill-red" />
        </Link>

        <Link aria-label="Github Profile"
          href={"https://github.com/RonaldoMine"}
          target="_blank"
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        >
          <VscGithub size={"24"} className="fill-red" />
        </Link>
        <Link aria-label="Mail Contact"
          href={"mailto:andremine98@gmail.com"}
          target="_blank"
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        >
          <IoMailOutline size={"24"} className="text-red" />
        </Link>
      </div>
    </section>
  );
}
