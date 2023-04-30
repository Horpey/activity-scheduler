import { test, describe } from "vitest";
import { render } from "@testing-library/react";
import PitchesPage from "@/app/pitches/page";

describe("PitchesPage", () => {
  test("Renders without crashing", () => {
    render(<PitchesPage />);
  });
});
