import { test, describe } from "vitest";
import { render } from "@testing-library/react";
import HomePage from "@/app/page";

describe("HomePage", () => {
  test("Renders without crashing", () => {
    render(<HomePage />);
  });
});
