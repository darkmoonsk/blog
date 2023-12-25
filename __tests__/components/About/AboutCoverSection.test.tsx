import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AboutCoverSection from "@/components/About/AboutCoverSection";
import { NextIntlClientProvider } from 'next-intl';
import pt from "../../../src/messages/pt-br.json"
import es from "../../../src/messages/es.json"

describe("AboutCoverSection component", () => {
  it("renders the profile image", () => {
    render(
      <NextIntlClientProvider locale="pt-br" messages={pt}>
        <AboutCoverSection />
      </NextIntlClientProvider>
    );
    const profileImage = screen.getByAltText("Bruno Souza");
    expect(profileImage).toBeInTheDocument();
  });

  it("renders the title and description in Portuguese", () => {
    render(
      <NextIntlClientProvider locale="pt-br" messages={pt}>
        <AboutCoverSection />
      </NextIntlClientProvider>
      );
    const title = screen.getByText(pt.About.title); 
    const description = screen.getByText(pt.About.description);
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it("renders the title and description in Spanish", () => {
    render(
      <NextIntlClientProvider locale="es" messages={es}>
        <AboutCoverSection />
      </NextIntlClientProvider>
      );
    const title = screen.getByText(es.About.title); 
    const description = screen.getByText(es.About.description);
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});