"use client";
import React from "react";
import Link from "next/link";
import courseData from "@/data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: String;
  slug: String;
  description: String;
  price: number;
  instructor: String;
  isFeatured: boolean;
}

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured === true,
  );

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
        <div className="grid grid-cols-1 justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex h-full max-w-sm flex-col overflow-hidden rounded-[22px] bg-white dark:bg-zinc-900">
                <div className="flex flex-grow flex-col items-center p-4 text-center sm:p-6">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow" >{course.description}</p>
                  <Link href={`courses/${course.slug}`} className="mt-4">
                  Learn More
                  </Link>
                 
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
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
