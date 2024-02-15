import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMailOutline, IoMenu } from "react-icons/io5";
import { VscGithub } from "react-icons/vsc";

export function Header() {
  return (
    <header className="py-6">
      <div className="flex justify-between items-center mb-1">
        <label htmlFor="menu" className="cursor-pointer sm:hidden">
          <IoMenu className="text-white" size={"28"} />
        </label>
        <input
          type="checkbox"
          name="menu"
          id="menu"
          className="appearance-none peer sm:hidden"
        />
        <div className="hidden flex-col gap-6 absolute z-50 top-14 bg-white py-6 px-10 transition-all duration-500 ease-in peer-checked:flex sm:top-0 sm:flex sm:p-0 sm:bg-transparent sm:flex-row sm:gap-10 sm:relative">
          <Link href="/" className="text-red">
            Home
          </Link>
          <Link href="/experience" className="text-pussian-blue sm:text-white">
            Experience
          </Link>
          <Link href="/about" className="text-pussian-blue sm:text-white">
            About
          </Link>
        </div>
        <div className="text-white flex gap-4 justify-between sm:mr-8 md:mr-12">
          <Link
            href={"https://linkedin.com/in/ronaldo-mine-764b59195"}
            target="_blank"
          >
            <FaLinkedinIn size={"24"} />
          </Link>
          <Link href={"https://github.com/RonaldoMine"} target="_blank">
            <VscGithub size={"24"} />
          </Link>
          <Link href={"mailto:andremine98@gmail.com"} target="_blank">
            <IoMailOutline size={"24"} />
          </Link>
        </div>
      </div>
      <h1 className="text-red text-center font-bold text-3xl">RM.</h1>
    </header>
  );
}
