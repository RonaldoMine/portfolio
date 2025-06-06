"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMailOutline, IoMenu } from "react-icons/io5";
import { TiTimes } from "react-icons/ti";
import { VscGithub } from "react-icons/vsc";

export function Header() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toogleMenu = () => {
    setVisible(false)
  }

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target) && visible) {
        toogleMenu();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, toogleMenu]);

  return (
    <header className="py-6" id="header">
      <div className="flex justify-between items-center mb-1">
        <button className="cursor-pointer sm:hidden">
          {
            !visible ? <IoMenu className={`text-white`} size={"28"} onClick={() => setVisible(true)} />
              : <TiTimes className={`text-white`} size={"28"} onClick={() => setVisible(false)} />
          }
        </button>
        <div ref={ref} className={`hidden flex-col gap-6 absolute z-50 top-14 bg-white py-6 px-10 transition-all duration-500 ease-in ${visible ? "!flex" : ""} sm:top-0 sm:flex sm:p-0 sm:bg-transparent sm:flex-row sm:gap-10 sm:relative`}>
          <Link
            href="/"
            className={`${pathname === "/"
              ? "text-red"
              : "text-pussian-blue sm:text-white"
              }`}
            aria-label="Home Page"
          >
            Home
          </Link>
          <Link
            href="/experience"
            className={`${pathname === "/experience"
              ? "text-red"
              : "text-pussian-blue sm:text-white"
              }`}
            aria-label="Experience Page"
          >
            Experience
          </Link>
          <Link
            href="/about"
            className={`${pathname === "/about"
              ? "text-red"
              : "text-pussian-blue sm:text-white"
              }`}
            aria-label="About Page"
          >
            About
          </Link>
        </div>
        <div className="text-white flex gap-4 justify-between sm:mr-8 md:mr-12">
          <Link
            aria-label="LinkedIn Profile"
            href={"https://linkedin.com/in/ronaldo-mine-764b59195"}
            target="_blank"
          >
            <FaLinkedinIn size={"24"} />
          </Link>
          <Link
            aria-label="Github Profile"
            href={"https://github.com/RonaldoMine"}
            target="_blank"
          >
            <VscGithub size={"24"} />
          </Link>
          <Link
            aria-label="Contact by email"
            href={"mailto:m2a.ronaldo@gmail.com"}
            target="_blank"
          >
            <IoMailOutline size={"24"} />
          </Link>
        </div>
      </div>
{/*       <h1 className="text-red text-center font-bold text-3xl">RM</h1>
 */}    </header>
  );
}
