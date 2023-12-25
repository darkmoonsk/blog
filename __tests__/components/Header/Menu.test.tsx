import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Menu from "@/components/Header/Menu";
import { NextIntlClientProvider } from "next-intl";
import pt from "../../../src/messages/pt-br.json";
import es from "../../../src/messages/es.json";

describe("Menu component", () => {

  // beforeEach(() => {
  //   Router.router = { push: jest.fn(), prefetch: () => {} };
  // });
  it("toggles theme from light to dark", async () => {
    render(
      <NextIntlClientProvider locale="pt-br" messages={pt}>
        <Menu isActive={true} />
      </NextIntlClientProvider>
    );

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

  it('renders links and navigates to correct paths in i18n set to Portuguese', () => {
    render(
      <NextIntlClientProvider locale="pt-br" messages={pt}>
        <Menu isActive={true} />
      </NextIntlClientProvider>
    );

    const homeLink = screen.getByRole('link', { name: pt.Menu.home });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/pt-br');

    const aboutLink = screen.getByRole('link', { name: pt.Menu.about });
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveAttribute('href', '/pt-br/about');

    const contactLink = screen.getByRole('link', { name: pt.Menu.contact });
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute('href', '/pt-br/contact');
  });

  it('renders links and navigates to correct paths in i18n set to Spanish', () => {
    render(
      <NextIntlClientProvider locale="es" messages={es}>
        <Menu isActive={true} />
      </NextIntlClientProvider>
    );

    const homeLink = screen.getByRole('link', { name: es.Menu.home });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/es');

    const aboutLink = screen.getByRole('link', { name: es.Menu.about });
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveAttribute('href', '/es/about');

    const contactLink = screen.getByRole('link', { name: es.Menu.contact });
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute('href', '/es/contact');
  });
  
});
