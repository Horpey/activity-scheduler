import { test, describe, expect } from "vitest";
import { ActivityTypesType } from "@/types/ActivityTypesType";

describe("ActivityTypes type", () => {
  test("Can be created with valid data", () => {
    const activityType: ActivityTypesType = {
      id: 1,
      activity_type: "mowing",
    };

    expect(activityType).toMatchObject({
      id: expect.any(Number),
      activity_type: expect.any(String),
    });
  });
});
