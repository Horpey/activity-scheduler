"use client";

import Link from "next/link";
import WeatherWidget from "@/components/WeatherWidget";
import ActivityListing from "@/components/ActivityListing";

export default function HomePage() {
  return (
    <div>
      <div className="md:grid grid-cols-12 items-center">
        <div className="col-span-10">
          <h1 className="font-light text-5xl">Good evening</h1>
          <p className="mt-2">
            Welcome to turfscheduler, where you can schedule tasks.
          </p>
        </div>
        <div className="col-span-2">
          <Link
            className="bg-primary-100 text-white rounded-md p-4 hidden md:block text-center"
            href="/activity-scheduler"
          >
            Schedule a task
          </Link>
        </div>
      </div>

      <div className="md:grid grid-cols-12 my-6 md:space-x-4">
        <div className="col-span-8">
          <ActivityListing />
        </div>
        <div className="col-span-4">
          <WeatherWidget />
        </div>
      </div>
    </div>
  );
}
