import { test, describe } from "vitest";
import { render } from "@testing-library/react";
import WeatherWidget from "@/components/WeatherWidget";

describe("WeatherWidget", () => {
  test("Component renders without crashing", () => {
    render(<WeatherWidget />);
  });
});
