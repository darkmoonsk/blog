import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Menu from "@/components/Header/Menu";

describe("Menu component", () => {

  // beforeEach(() => {
  //   Router.router = { push: jest.fn(), prefetch: () => {} };
  // });
  it("toggles theme from light to dark", async () => {
    render(<Menu isActive={true} />);

    const toggleButton = screen.getByRole("button");
    fireEvent.click(toggleButton);
    await waitFor(() => {
      expect(screen.getByRole("button")).toHaveClass("bg-light text-dark");
    });

    fireEvent.click(toggleButton);

    await waitFor(() => {
      expect(screen.getByRole("button")).toHaveClass("bg-dark text-light");
    });
  });

  it('renders links and navigates to correct paths', () => {
    render(<Menu isActive={true} />);

    const homeLink = screen.getByRole('link', { name: /inicio/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');

    const aboutLink = screen.getByRole('link', { name: /sobre/i });
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveAttribute('href', '/about');

    const contactLink = screen.getByRole('link', { name: /contato/i });
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute('href', '/contact');
  });
  
});
