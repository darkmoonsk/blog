import AboutCoverSection from '@/components/About/AboutCoverSection';
import { render, screen } from '@testing-library/react';

describe('AboutCoverSection', () => {
  it('renders AboutCoverSection component', () => {
    render(<AboutCoverSection />);

    expect(screen.getByAltText('Bruno Souza')).toBeInTheDocument();
    expect(screen.getByText('Mais alto, mais longe, mais rapido!')).toBeInTheDocument();
    expect(screen.getByText(/Sou um programador apaixonado pelo que faz/i)).toBeInTheDocument();
  });
});