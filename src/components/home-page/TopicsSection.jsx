import React from "react";
import PostCard from "../cards/PostCard";
import Link from "next/link";

export default function TopicsSection() {
  return (
    <div className="flex flex-col gap-10 rounded-3xl bg-Gray p-6 lg:p-16 max-w-7xl mx-auto font-poppins mb-16 mt-20 lg:mt-0">
      {/* header */}
      <div className="flex flex-col gap-2 text-start md:text-center">
        <span className="font-semibold text-gray-600 uppercase text-sm md:text-lg tracking-wider">
          Topics
        </span>
        <span className="font-bold text-3xl md:text-5xl">Explore topics</span>
      </div>

      {/* topics nav */}
      <div>
        <div className="flex gap-2 md:gap-4 md:flex-wrap justify-start md:justify-center overflow-x-auto scrollbar-hide -mx-4 px-4">
          <Link
            href={"/explore-topics"}
            className="shrink-0 px-4 py-2 bg-gray-100 font-semibold border border-black rounded-full text-sm"
          >
            Explore all topics
          </Link>
          {topics.map((topic, index) => (
            <button
              key={index}
              className="shrink-0 px-4 py-2 md:px-4 md:py-2 bg-gray-100 rounded-full md:rounded-full text-sm whitespace-nowrap"
            >
              {topic}
            </button>
          ))}
        </div>
      </div>

      {/* cards */}
      <div className="flex flex-wrap mx-auto gap-8">
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
}

const topics = [
  "Society",
  "Life",
  "Culture",
  "World",
  "Software Development",
  "Work",
  "Media",
  "Technology",
  "Self Improvement",
  "Programming",
  "Politics",
  "Machine Learning",
  "Health",
  "Relationships",
  "Music",
  "Business",
  "Science",
  "Art",
  "History",
  "Design",
  "Travel",
];
