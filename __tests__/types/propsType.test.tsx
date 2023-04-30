import { test, describe, expect } from "vitest";
import { PropsType } from "@/types/PropsType";
import { ActivityTypesType } from "@/types/ActivityTypesType";
import { PerformerType } from "@/types/PerformerType";
import { PitchType } from "@/types/PitchType";
import { ActivityType } from "@/types/ActivityType";

describe("PropsType type", () => {
  test("Can be created with valid data", () => {
    const activities: ActivityType[] = [
      {
        id: 1,
        activity_type: "mowing",
        pitch: "Pitch 2",
        performer: "John",
        datetime: "Apr 30, 2023 7:26 PM",
      },
    ];

    const activityTypes: ActivityTypesType[] = [
      { id: 1, activity_type: "mowing" },
    ];

    const performers: PerformerType[] = [{ id: 1, performer: "John" }];

    const pitches: PitchType[] = [{ id: 1, pitch: "Pitch 1" }];

    const props: PropsType = {
      activities,
      activityTypes,
      performers,
      pitches,
      setActivities: () => {},
    };

    expect(props).toMatchObject({
      activities: expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          activity_type: expect.any(String),
          pitch: expect.any(String),
          performer: expect.any(String),
          datetime: expect.any(String),
        }),
      ]),

      activityTypes: expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          activity_type: expect.any(String),
        }),
      ]),

      performers: expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          performer: expect.any(String),
        }),
      ]),

      pitches: expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          pitch: expect.any(String),
        }),
      ]),
    });
  });
});
