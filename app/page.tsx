"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import WeatherWidget from "@/components/WeatherWidget";
import ActivityListing from "@/components/ActivityListing";

export default function HomePage() {
  const [greetings, setGreetings] = useState<string>("Hello");

  useEffect(() => {
    const date = new Date();
    const hour = date.getHours();

    if (hour < 12) {
      setGreetings("Good morning");
    } else if (hour < 18) {
      setGreetings("Good afternoon");
    } else {
      setGreetings("Good evening");
    }
  }, []);

  return (
    <div>
      <div className="md:grid grid-cols-12 items-center">
        <div className="col-span-10">
          <h1 className="font-light text-5xl">{greetings}</h1>
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
