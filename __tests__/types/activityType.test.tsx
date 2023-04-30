import { test, describe, expect } from "vitest";
import { ActivityType } from "@/types/ActivityType";

describe("ActivityType type", () => {
  test("Can be created with valid data", () => {
    const activity: ActivityType = {
      id: 1,
      activity_type: "mowing",
      pitch: "pitch 1",
      performer: "John",
      datetime: "Apr 30, 2023 7:26 PM",
    };

    expect(activity).toMatchObject({
      id: expect.any(Number),
      activity_type: expect.any(String),
      pitch: expect.any(String),
      performer: expect.any(String),
      datetime: expect.any(String),
    });
  });
});
