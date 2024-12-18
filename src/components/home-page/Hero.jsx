import React from "react";
import MainButton from "../MainButton";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="lg:h-screen flex flex-col gap-8 lg:gap-10 justify-start lg:justify-center items-center font-poppins pt-16 lg:pt-0">
      <h3 className="text-sm lg:text-xl px-4 lg:px-0 text-center">
        Get inspired by millions of people around the world.
      </h3>
      <h1 className="text-4xl lg:text-7xl font-bold max-w-[300px] lg:max-w-lg text-center bg- red-500">
        Start writing your story today
      </h1>
      <div className="flex flex-col gap-4 items-center">
        <Link href="signup">
          <button
            className={`px-8 py-4 md:px-10 md:py-5 text-md md:text-xl bg-Yellow font-poppins font-semibold rounded-full w-fit hover:bg -yellow-600 transition-all `}
          >
            Get Started
          </button>
        </Link>
        <p className="text-sm lg:text-md">
          It’s free and takes less than a minute!
        </p>
      </div>
    </div>
  );
}
