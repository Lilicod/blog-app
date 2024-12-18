import React from "react";

export default function Header({ subHeader, header }) {
  return (
    <header className="flex flex-col gap-2 text-start md:text-center">
      <span className="font-semibold text-gray-600 uppercase text-sm md:text-lg tracking-wider">
        {subHeader}
      </span>
      <span className="font-bold text-3xl md:text-5xl">{header}</span>
    </header>
  );
}
