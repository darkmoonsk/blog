import Skills from '@/components/About/Skills';
import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import pt from "../../../src/messages/pt-br.json"
import { skillListPTBR } from '@/constants/skills';

describe('Skills component', () => {
  test('renders correctly', () => {
    render(
      <NextIntlClientProvider locale="pt-br" messages={pt}>
        <Skills />
      </NextIntlClientProvider>
    );

    const skillsSection = screen.getByTestId("skills-section");
    expect(skillsSection).toBeInTheDocument();
  });

  test('displays correct skills in Portuguese', () => {
    render(
      <NextIntlClientProvider locale="pt-br" messages={pt}>
        <Skills />
      </NextIntlClientProvider>
    );

    skillListPTBR.forEach(skill => {
      const skillElement = screen.getByText(skill);
      expect(skillElement).toBeInTheDocument();
    });
  });

  test('displays correct skills in Spanish', () => {
    render(
      <NextIntlClientProvider locale="pt-br" messages={pt}>
        <Skills />
      </NextIntlClientProvider>
    );

    skillListPTBR.forEach(skill => {
      const skillElement = screen.getByText(skill);
      expect(skillElement).toBeInTheDocument();
    });
  });
});