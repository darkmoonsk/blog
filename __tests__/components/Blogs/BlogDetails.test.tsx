import { render, screen } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";
import pt from "../../../src/messages/pt-br.json";
import BlogDetails from "@/components/Blogs/BlogDetails";
import Blog from "@/app/models/blog";

jest.mock("../../../src/components/Blogs/ViewCounter", () => {
  return function DummyViewCounter() {
    return <div data-testid="view-counter">ViewCounter</div>;
  };
});

jest.mock('github-slugger', () => ({
  slug: jest.fn().mockImplementation((input) => input.replace(/\s/g, '-').toLowerCase()),
}));

jest.mock('next-intl/server', () => ({
  getLocale: jest.fn().mockReturnValue('pt-br'),
}));

const mockBlog: Blog = {
  title: "Test Title",
  lang: "en",
  publishedAt: "2022-01-01T00:00:00Z",
  updatedAt: "2022-01-01T00:00:00Z",
  description: "Test Description",
  readingTime: {text: "5 min read"},
  image: {
    filePath: "../public/avatar.jpeg",
    relativeFilePath: "../public/avatar.jpeg",
    width: 100,
    height: 100,
    aspectRatio: 1,
    alt: "Test Image",
    format: "jpeg",
    blurhashDataUrl: "Test Blurhash"
  },
  isPublished: true,
  author: "Test Author",
  tags: ["test1", "test2"]
};

describe("BlogDetails component", () => {
  it("renders correctly in Portuguese", () => {
    render(
      <NextIntlClientProvider locale="pt-br" messages={pt}>
        <BlogDetails blog={mockBlog} slug="test-blog" locale="pt-br" />
      </NextIntlClientProvider>
    );

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

  it("renders correctly in Spanish", () => {
    render(
      <NextIntlClientProvider locale="pt-br" messages={pt}>
        <BlogDetails blog={mockBlog} slug="test-blog" locale="es" />
      </NextIntlClientProvider>
    );

    // Verifica se o componente de contagem de visualizações está presente
    const viewCounter = screen.getByTestId("view-counter");
    expect(viewCounter).toBeInTheDocument();

    // Verifica se o tempo de leitura está presente
    const readingTime = screen.getByText(/5 min de lectura/i);
    expect(readingTime).toBeInTheDocument();

    // Verifica se a tag está presente
    const tag = screen.getByText(/#test/i);
    expect(tag).toBeInTheDocument();
  });
});