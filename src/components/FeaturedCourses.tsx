import React from "react";
import Link from "next/link";
import courseData from "@/data/music_courses.json";


function FeaturedCourses() {
    const data = courseData.courses.filter(course => course.isFeatured === true)
    
  return (
    <div className="bg-gray-900 py-12">
      <div className="text-center">
        <h2 className="text-lg font-semibold uppercase tracking-wide text-teal-500">
          FEATURED COURSES
        </h2>
        <p className="mt-5 text-3xl font-bold leading-8 tracking-tight text-white sm:text-4xl">
          Learn With the Best
        </p>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3">2</div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="rounded border-neutral-600 bg-white px-4 py-3 text-neutral-700 transition duration-200 hover:bg-gray-200"
        >
          View all Courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
