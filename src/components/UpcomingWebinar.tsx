"use client";
import React from "react";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinar() {
  const featuredWebinars = [
    {
      title: "Understanding Music Theory",
      description:
        "Dive deep into the fundamentals of music theory and enhance your musical skills.",
      slug: "understanding-music-theory",
      isFeatured: true,
    },
    {
      title: "The Art of Songwriting",
      description:
        "Learn the craft of songwriting from experienced musicians and songwriters.",
      slug: "the-art-of-songwriting",
      isFeatured: true,
    },
    {
      title: "Mastering Your Instrument",
      description:
        "Advanced techniques to master your musical instrument of choice.",
      slug: "mastering-your-instrument",
      isFeatured: true,
    },
    {
      title: "Music Production Essentials",
      description:
        "Get started with music production with this comprehensive overview.",
      slug: "music-production-essentials",
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: "Live Performance Techniques",
      description:
        "Enhance your live performance skills with expert tips and strategies.",
      slug: "live-performance-techniques",
      isFeatured: true,
    },
    {
      title: "Digital Music Marketing",
      description:
        "Learn how to promote your music effectively in the digital age.",
      slug: "digital-music-marketing",
      isFeatured: true,
    },
  ];

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
          <div className="mx-auto max-w-5xl px-8">
            <HoverEffect
              items={featuredWebinars.map((webinar) => ({
                title: webinar.title,
                description: webinar.description,
                link: `/webinars/${webinar.slug}`,
              }))}
            />
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
    </div>
  );
}

export default UpcomingWebinar;
