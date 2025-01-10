import React from "react";
import Header from "../Header";
import HowItWorkCard from "../cards/HowItWorkCard";

export default function HowItWorks() {
  return (
    <div className="flex flex-col justify-center items-center  gap-10 rounded-3xl bg-Gray p-6 lg:p-16 max-w-5xl mx-auto font-poppins mb-16 mt-0 lg:mt-0">
      {/* header */}
      <Header subHeader={"How it works!"} header={"Discover how it works"} />

      {/* cards */}
      <div className="grid rows-2 grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-40 lg:pt-10">
        <HowItWorkCard
          step={"01"}
          title={"Create an account"}
          summery={
            "Create an account for free and set up your profile based on your interests."
          }
          rotate={"rotate-12"}
          color={"from-blue-300 to-blue-100"}
        />

        <div className="md:mt-24">
          <HowItWorkCard
            step={"02"}
            title={"Write your story"}
            summery={
              "Write your story using our easy to use editor or read stories written by other writers."
            }
            rotate={"-rotate-6"}
            color={"from-purple-300 to-purple-100"}
          />
        </div>

        <div className="md:ml-10">
          <HowItWorkCard
            step={"03"}
            title={"Publish your story"}
            summery={"Publish your story and share it with the world."}
            rotate={"rotate-6"}
            color={"from-[#ffedd5] to-[#fff7ed]"}
          />
        </div>

        <div className="md:mt-40">
          <HowItWorkCard
            step={"04"}
            title={"Inspire others"}
            summery={
              "interact with other writers and readers and get inspired."
            }
            rotate={"-rotate-6"}
            color={"from-blue-300 to-blue-100"}
          />
        </div>
      </div>
    </div>
  );
}
