import React from "react";

export default function PostCard() {
  return (
    <div className=" rounded-[32px] hover:scale-105 font-poppins p-4 bg-white flex flex-col gap-3 w-full lg:w-[340px] overflow-hidden shadow-md">
      {/* cover */}
      <div
        style={{
          backgroundImage: `url(/images/cover.jpeg)`,
        }}
        className=" w-full h-44 relative  object-cover bg-cover bg-center rounded-2xl"
      >
        <span className="absolute bottom-0 left-0 px-3 py-1 m-3 font-semibold text-[12px] bg-white rounded-[24px] z-20">
          Relationships
        </span>
      </div>

      {/* time */}
      <div className="text-gray-400 text-sm">10 mins read</div>

      {/* title */}
      <div className="font-semibold text-lg">
        How love can change your life to the better
      </div>

      {/* summery */}
      <div className="line-clamp-2 text-gray-500">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe fugit,
        maxime repudiandae impedit placeat dicta quas quae vel. Voluptates saepe
        blanditiis aut inventore ipsa adipisci eligendi ab necessitatibus enim
        quasi.
      </div>

      {/* user */}
      <div className="flex items-center">
        <div
          style={{
            backgroundImage: `url(/images/cover.jpeg)`,
          }}
          className=" w-10 h-10 object-cover bg-cover bg-center rounded-full"
        ></div>

        <div className="flex flex-col ml-4">
          <span className="text-sm text-gray-500 font-semibold">John Doe</span>
          <span className="text-sm text-gray-400">June 22, 2023</span>
        </div>
      </div>
    </div>
  );
}
