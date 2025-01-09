import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserCard from "./UserCard";
import React from "react";

// Mock the utils module
vi.mock("@/utils", () => ({
  maskEmail: vi.fn((email: string) => "masked@email.com"),
}));

// Mock next/image
vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    return (
      <img
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
        data-testid="user-image"
      />
    );
  },
}));

// Mock react-icons
vi.mock("react-icons/fa", () => ({
  FaRegEye: () => <div data-testid="eye-icon">Eye</div>,
  FaRegEyeSlash: () => <div data-testid="eye-slash-icon">EyeSlash</div>,
}));

describe("UserCard", () => {
  const mockUser = {
    first_name: "John",
    last_name: "Doe",
    email: "john.doe@example.com",
    avatar: "/path/to/avatar.jpg",
  };

  it("renders user information correctly", () => {
    render(<UserCard user={mockUser} />);

    expect(
      screen.getByText(`${mockUser.first_name} ${mockUser.last_name}`)
    ).toBeInTheDocument();

    const image = screen.getByTestId("user-image");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mockUser.avatar);
    expect(image).toHaveAttribute("width", "150");
    expect(image).toHaveAttribute("height", "200");
  });

  it("uses default avatar when user avatar is null", () => {
    const userWithoutAvatar = { ...mockUser, avatar: null };
    render(<UserCard user={userWithoutAvatar} />);

    const image = screen.getByTestId("user-image");
    expect(image).toHaveAttribute("src", "/avatar.png");
  });

  it("shows masked email by default", () => {
    render(<UserCard user={mockUser} />);
    expect(screen.getByText("masked@email.com")).toBeInTheDocument();
    expect(screen.getByTestId("eye-slash-icon")).toBeInTheDocument();
  });

  it("toggles between masked and unmasked email when clicking the button", () => {
    render(<UserCard user={mockUser} />);

    // Initially masked
    expect(screen.getByText("masked@email.com")).toBeInTheDocument();

    // Click to unmask
    const toggleButton = screen.getByRole("button");
    fireEvent.click(toggleButton);

    // Should show actual email
    expect(screen.getByText(mockUser.email)).toBeInTheDocument();
    expect(screen.getByTestId("eye-icon")).toBeInTheDocument();

    // Click to mask again
    fireEvent.click(toggleButton);

    // Should show masked email again
    expect(screen.getByText("masked@email.com")).toBeInTheDocument();
    expect(screen.getByTestId("eye-slash-icon")).toBeInTheDocument();
  });

  it("applies correct CSS classes", () => {
    render(<UserCard user={mockUser} />);

    const container = screen.getByTestId("user-image").closest("div");
    expect(container).toHaveClass(
      "flex",
      "items-center",
      "border",
      "p-4",
      "rounded",
      "my-4",
      "flex-col"
    );

    const infoContainer = container?.querySelector("div:nth-child(2)");
    expect(infoContainer).toHaveClass(
      "flex",
      "flex-col",
      "items-center",
      "gap-2"
    );
  });

  it("handles undefined email", () => {
    const userWithoutEmail = { ...mockUser, email: undefined };
    render(<UserCard user={userWithoutEmail} />);

    expect(screen.getByText("masked@email.com")).toBeInTheDocument();
  });
});
