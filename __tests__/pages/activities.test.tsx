import { test, describe } from "vitest";
import { render } from "@testing-library/react";
import ActivitiesPage from "@/app/activities/page";

describe("ActivitiesPage", () => {
  test("Renders without crashing", () => {
    render(<ActivitiesPage />);
  });
});
