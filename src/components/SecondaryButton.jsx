import Link from "next/link";
import React from "react";

export default function SecondaryButton({ label, font, link }) {
  return (
    <Link href={link}>
    <button
      className={`px-4 py-2 md:px-4 md:py-3 text-sm md:text-lg bg-transparent font-poppins font-${font} rounded-full w-fit hover:bg-gray-100  transition-all `}
    >
      {label}
    </button>
    </Link>
  );
}
