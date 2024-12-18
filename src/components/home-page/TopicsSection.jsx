import React from "react";
import PostCard from "../cards/PostCard";
import Link from "next/link";
import Header from "../Header";

export default function TopicsSection() {
  return (
    <div className="flex flex-col gap-10 rounded-3xl bg-Gray p-6 lg:p-16 max-w-7xl mx-auto font-poppins mb-16 mt-20 lg:mt-0">
      {/* header */}
      <Header subHeader={"Topics"} header={"Explore topics"} />
      
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
