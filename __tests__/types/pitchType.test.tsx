import { test, describe, expect } from "vitest";
import { PitchType } from "@/types/PitchType";

describe("PitchType type", () => {
  test("Can be created with valid data", () => {
    const pitch: PitchType = {
      id: 1,
      pitch: "John",
    };

    expect(pitch).toMatchObject({
      id: expect.any(Number),
      pitch: expect.any(String),
    });
  });
});
