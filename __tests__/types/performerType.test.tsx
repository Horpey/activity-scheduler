import { test, describe, expect } from "vitest";
import { PerformerType } from "@/types/PerformerType";

describe("PerformerType type", () => {
  test("Can be created with valid data", () => {
    const performer: PerformerType = {
      id: 1,
      performer: "John",
    };

    expect(performer).toMatchObject({
      id: expect.any(Number),
      performer: expect.any(String),
    });
  });
});
