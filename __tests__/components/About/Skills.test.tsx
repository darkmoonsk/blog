import Skills from '@/components/About/Skills';
import { render, screen } from '@testing-library/react';

describe('Skills component', () => {
  test('renders correctly', () => {
    render(<Skills />);

    const skillsSection = screen.getByTestId("skills-section");
    expect(skillsSection).toBeInTheDocument();
  });

  test('displays correct skills', () => {
    render(<Skills />);

    const skills = [
      "React",
      "Node.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "IA Generativa",
      "Web Design",
      "Firebase",
      "TailwindCSS",
      "Styled Components",
      "Animação Web",
    ];

    skills.forEach(skill => {
      const skillElement = screen.getByText(skill);
      expect(skillElement).toBeInTheDocument();
    });
  });
});