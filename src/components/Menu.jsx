import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import MainButton from "./MainButton";
import SecondaryButton from "./SecondaryButton";

export const Menu = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const menuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setMenuOpened(false);
      }
    };

    if (menuOpened) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpened]);

  const toggleMenu = () => {
    setMenuOpened((prev) => !prev);
  };

  return (
    <>
      <button
        ref={toggleButtonRef}
        onClick={toggleMenu}
        className={`z-50  top-3 left-1 p-3 bg-transparent w-10 h-11 rounded-md ${
          menuOpened ? "fixed" : "absolute"
        }`}
      >
        <div
          className={`bg-black h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "rotate-45  translate-y-0.5" : ""
          }`}
        />
        <div
          className={`bg-black h-0.5 rounded-md w-full my-1 ${
            menuOpened ? "hidden" : ""
          }`}
        />
        <div
          className={`bg-black h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "-rotate-45" : ""
          }`}
        />
      </button>
      <div
        ref={menuRef}
        className={`z-40 fixed top-0 left-0 font-poppins bg-white text-black transition-all overflow-hidden flex flex-col
        ${menuOpened ? "w-80 h-[100vh]" : "w-0 h-[100vh]"}`}
      >
        <div className="flex-1 flex items-start justify-start mt-12 text-xl font-semibold flex-col gap-6 px-5 py-8">
          <Link
            href="/login"
            className="flex items-center gap-x-3 justify-center"
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-x-3 justify-center"
          >
            Contact
          </Link>
        </div>
        <div className="w-full flex items-center justify-center pb-16">
          <MainButton label={"Sign up"} font={"semibold"} link={"/signup"} />
        </div>
      </div>
    </>
  );
};
