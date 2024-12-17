import Link from "next/link";
import React from "react";

export default function MainButton({ label, font, onClick, link }) {
  return (
    <Link href={link}>
      <button
        onClick={onClick}
        className={`px-4 py-2 md:px-4 md:py-3 text-sm md:text-lg bg-Yellow font-poppins font-${font} rounded-full w-fit hover:bg -yellow-600 transition-all `}
      >
        {label}
      </button>
    </Link>
  );
}
