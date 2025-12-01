import { test, expect } from "vitest";
import { greet } from "./greet";

test('should return "Hi" followed by the name', () => {
  expect(greet("Alice")).toBe("Hi Alice");
});
