import { render, screen } from "@testing-library/react";
import Header from "@/components/Header";


jest.mock('next/dynamic', () => () => {
  return function MockMenu() {
    return <div data-testid="menu">Menu</div>;
  };
});

describe("Header Component", () => {
  it("renders the logo", async () => {
    render(<Header />);
    expect(screen.getByAltText("Logo do portfolio")).toBeInTheDocument();
  });

  it("renders the menu button for mobile view", () => {
    render(<Header />);
    const menuButton = screen.getByTestId("sandwich-btn");
    expect(menuButton).toBeInTheDocument();
  });

  it("renders menu component inside header", () => {
    render(<Header />);
    const menu = screen.getByText("Menu");
    expect(menu).toBeInTheDocument();
  });

  it("renders the Linkedin, Github and Portfolio links and navigates to correct paths", () => {
    render(<Header />);
    expect(screen.getByText("Linkedin")).toBeInTheDocument();
    expect(screen.getByText("Github")).toBeInTheDocument();
    expect(screen.getByText("Portfolio")).toBeInTheDocument();

    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute("href", "https://www.linkedin.com/in/brunosouzadkm/");
    expect(linkedinLink).toHaveAttribute("target", "_blank");

    const githubLink = screen.getByRole("link", { name: /github/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href", "https://github.com/darkmoonsk");
    expect(githubLink).toHaveAttribute("target", "_blank");

    const portfolioLink = screen.getByRole("link", { name: /portfolio/i });
    expect(portfolioLink).toBeInTheDocument();
    expect(portfolioLink).toHaveAttribute("href", "https://portfolio.brunosouzadev.com/");
    expect(portfolioLink).toHaveAttribute("target", "_blank");
  });

  it("renders Linkedin, Github and Portfolio images", () => {
    render(<Header />);
    expect(screen.getByTestId("linkedin-icon")).toBeInTheDocument();
    expect(screen.getByTestId("github-icon")).toBeInTheDocument();
    expect(screen.getByAltText("Logo do portfolio")).toBeInTheDocument();
  });
});
