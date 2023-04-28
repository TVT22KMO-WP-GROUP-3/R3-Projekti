import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import RegisterPage from "./RegisterPage";

describe("RegisterPage", () => {
  it("should render the form and submit the data correctly", async () => {
    const { getByLabelText, getByText } = render(<RegisterPage />);

    // Fill in the form with test data
    fireEvent.change(getByLabelText(/username/i), { target: { value: "testuser" } });
    fireEvent.change(getByLabelText(/password/i), { target: { value: "testpass" } });

    // Submit the form
    fireEvent.submit(getByText(/register/i));

    // Wait for the registration process to finish
    await waitFor(() => expect(getByText(/Registration successful/i)).toBeInTheDocument());
  });

  it("should display an error message when submitting an empty form", async () => {
    const { getByText } = render(<RegisterPage />);

    // Submit the form without data
    fireEvent.submit(getByText(/register/i));

    // Check that an error message is displayed
    await waitFor(() => expect(getByText(/Username or password missing/i)).toBeInTheDocument());
  });

  it("should display an error message when registering with an invalid username", async () => {
    // Mock the API response to return an error status
    jest.spyOn(window, "fetch").mockImplementation(() =>
      Promise.resolve({
        status: 400,
        text: () => Promise.resolve(""),
      })
    );

    const { getByLabelText, getByText } = render(<RegisterPage />);

    // Fill in the form with mock data
    fireEvent.change(getByLabelText(/username/i), { target: { value: "invaliduser" } });
    fireEvent.change(getByLabelText(/password/i), { target: { value: "testpass" } });

    // Submit the form
    fireEvent.submit(getByText(/register/i));

    // Check that an error message is displayed
    await waitFor(() => expect(getByText(/invalid username or username already taken/i)).toBeInTheDocument());
  });
});