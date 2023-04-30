import { test, describe } from "vitest";
import { render } from "@testing-library/react";
import ActivityListing from "@/components/ActivityListing";

describe("ActivitiesPage", () => {
  test("Component renders without crashing", () => {
    render(<ActivityListing />);
  });
});
