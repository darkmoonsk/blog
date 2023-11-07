import InsightRoll from '@/components/About/InsightRoll';
import { render, screen } from '@testing-library/react';

describe('InsightRoll component', () => {
  it('renders correctly', () => {
    const insights = ['insight1', 'insight2', 'insight3'];

    render(<InsightRoll insights={insights} />);

    insights.forEach(insight => {
      expect(screen.getByText(insight)).toBeInTheDocument();
    });
  });
});