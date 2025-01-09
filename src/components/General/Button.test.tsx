import { describe, it, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import Button, { ButtonStyles } from "./Button";
import React from "react";

describe("Button Component", () => {
  it("renders children correctly", () => {
    const { getByText } = render(
      <Button onClick={() => {}}>Test Button</Button>
    );

    expect(getByText("Test Button")).toBeDefined();
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = vi.fn();
    const { getByRole } = render(
      <Button onClick={handleClick}>Click Me</Button>
    );

    const button = getByRole("button");
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies Primary style by default", () => {
    const { getByRole } = render(
      <Button onClick={() => {}}>Default Style</Button>
    );

    const button = getByRole("button");
    expect(button.className).toContain("bg-blue-500");
    expect(button.className).toContain("hover:bg-blue-700");
  });

  it("applies Danger style when specified", () => {
    const { getByRole } = render(
      <Button onClick={() => {}} className={ButtonStyles.Danger}>
        Danger Button
      </Button>
    );

    const button = getByRole("button");
    expect(button.className).toContain("bg-red-500");
    expect(button.className).toContain("hover:bg-red-700");
  });

  it('has type="button" attribute', () => {
    const { getByRole } = render(
      <Button onClick={() => {}}>Button Type</Button>
    );

    const button = getByRole("button");
    expect(button.getAttribute("type")).toBe("button");
  });
});
