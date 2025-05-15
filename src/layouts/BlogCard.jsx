import React from "react";

// eslint-disable-next-line react/prop-types
export default function BlogCard({ img, headlines }) {
  return (
    <div
      className="w-full sm:w-[90%] md:w-[45%] lg:w-[30%] p-6 shadow-lg rounded-lg 
      transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl bg-white mx-auto"
    >
      {/* Image Section */}
      <div className="relative overflow-hidden rounded-lg">
        <img
          className="h-48 md:h-56 lg:h-64 w-full object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
          src={img}
          alt="Blog"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-30 rounded-lg"></div>
      </div>

      {/* Content Section */}
      <div className="mt-6 px-4">
        <h2 className="text-xl font-semibold text-[#1F4C4A] text-center mb-4">
          {headlines}
        </h2>
        <p className="text-sm text-gray-600 text-center leading-relaxed mb-4">
          Discover exciting insights and updates tailored just for you. Stay
          informed and inspired with the latest trends and stories in health and
          wellness.
        </p>
        <button
          className="block mx-auto px-6 py-2 bg-[#188ba0] text-white text-sm font-semibold 
          rounded-full shadow-md transition-colors duration-300 ease-in-out hover:bg-[#1F4C4A]"
        >
          Read More
        </button>
      </div>
    </div>
  );
}
