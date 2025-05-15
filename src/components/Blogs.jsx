import React from "react";
import Button from "../layouts/Buttons";
import BlogCard from "../layouts/BlogCard";
import img1 from "../assets/img/blog1.jpg";
import img2 from "../assets/img/blog2.jpg";
import img3 from "../assets/img/blog3.jpg";
import img4 from "../assets/img/blog4.jpg";
import img5 from "../assets/img/blog5.jpg";
import img6 from "../assets/img/blog6.jpg";

export default function Blogs() {
  return (
    <div className="min-h-screen bg-[#e9f4f1] text-[#2d3a34] py-12 ">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading Section */}
        <div className="text-center mb-12 mt-12">
          <h1 className="text-4xl font-semibold text-[#188ba0] mb-4">
            Latest Posts
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Stay updated with our latest blog posts on health, wellness, and
            medical insights.
          </p>
          <Button title="Explore Our Articles" />
        </div>

        {/* Blog Cards Section */}
        <div className="flex flex-wrap justify-center gap-8">
          <BlogCard
            img={img1}
            headlines="Unraveling the Mysteries of Sleep"
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
          />
          <BlogCard
            img={img2}
            headlines="The Heart-Healthy Diet"
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
          />
          <BlogCard
            img={img3}
            headlines="Understanding Pediatric Vaccinations"
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
          />
          <BlogCard
            img={img4}
            headlines="Navigating Mental Health"
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
          />
          <BlogCard
            img={img5}
            headlines="The Importance of Regular Exercise"
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
          />
          <BlogCard
            img={img6}
            headlines="Skin Health 101"
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
          />
        </div>
      </div>
    </div>
  );
}
