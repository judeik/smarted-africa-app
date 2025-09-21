import '@testing-library/jest-dom'; // optional if using setup file
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

function Hello({ name }: { name: string }) {
  return <h1>Hello, {name}!</h1>;
}

describe('Hello component', () => {
  it('renders with name', () => {
    render(<Hello name="Jude" />);
    expect(screen.getByText('Hello, Jude!')).toBeInTheDocument();
  });
});
