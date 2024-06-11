import React from "react";
import Link from "next/link";

function UpcomingWebinar() {
  return (
    <div className="bg-gray-900 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-lg font-semibold uppercase tracking-wide text-teal-500">
            FEATURED WEBINARS
          </h2>
          <p className="mt-5 text-3xl font-bold leading-8 tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
          
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
    </div>
  );
}

export default UpcomingWebinar;
