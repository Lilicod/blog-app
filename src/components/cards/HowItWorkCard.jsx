import React from "react";

export default function HowItWorkCard( { step, title, summery, rotate, color } ) {
  return (
    <div className={`rounded-[28px] w-64 h-64 p-4 shadow-2xl ${rotate} font-poppins hover:scale-105`}>
      <div className={`rounded-xl p-4 bg-gradient-to-b ${color} h-full flex flex-col gap-4`}>
        {/* step number */}
        <span className="font-semibold text-2xl">{step}</span>

        {/* step title */}
        <h3 className="font-semibold text-xl">{title}</h3>

        {/* step summery */}
        <p className="text-gray-500">
          {summery}
        </p>
      </div>
    </div>
  );
}
