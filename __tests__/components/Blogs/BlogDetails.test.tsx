import BlogDetails from "@/components/Blogs/BlogDetails";
import { render, screen } from "@testing-library/react";

jest.mock("../../../src/components/Blogs/ViewCounter", () => {
  return function DummyViewCounter() {
    return <div data-testid="view-counter">ViewCounter</div>;
  };
});

jest.mock('github-slugger', () => ({
  slug: jest.fn().mockImplementation((input) => input.replace(/\s/g, '-').toLowerCase()),
}));



describe("BlogDetails component", () => {
  const mockBlog = {
    publishedAt: new Date().toISOString(),
    readingTime: { text: "5 min read" },
    tags: ["test"],
  };

  it("renders correctly", () => {
    render(<BlogDetails blog={mockBlog} slug="test-blog" />);

    // Verifica se o componente de contagem de visualizações está presente
    const viewCounter = screen.getByTestId("view-counter");
    expect(viewCounter).toBeInTheDocument();

    // Verifica se o tempo de leitura está presente
    const readingTime = screen.getByText(/5 min de leitura/i);
    expect(readingTime).toBeInTheDocument();

    // Verifica se a tag está presente
    const tag = screen.getByText(/#test/i);
    expect(tag).toBeInTheDocument();
  });
});
