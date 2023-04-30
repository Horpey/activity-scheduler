import { test, describe } from "vitest";
import { render } from "@testing-library/react";
import TaskPerformersPage from "@/app/task-performers/page";

describe("TaskPerformersPage", () => {
  test("Renders without crashing", () => {
    render(<TaskPerformersPage />);
  });
});
