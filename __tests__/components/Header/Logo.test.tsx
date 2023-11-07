import Logo from '@/components/Header/Logo';
import { render, screen } from '@testing-library/react';


describe('Logo Component', () => {
  it('renders without crashing', () => {
    render(<Logo />);
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('renders the image correctly', () => {
    render(<Logo />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', '/_next/image?url=%2Fimg.jpg&w=3840&q=75');
    expect(img).toHaveAttribute('alt', 'Bruno Souza');
  });

  it('renders the name correctly', () => {
    render(<Logo />);
    const name = screen.getByText('Bruno Souza');
    expect(name).toBeInTheDocument();
  });

  it('has correct link', () => {
    render(<Logo />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/');
  });
});