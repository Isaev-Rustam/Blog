import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Layout } from './index';

vi.mock('@/components/wrapper', () => ({
  Wrapper: () => <div>Wrapper</div>,
}));
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
  return {
    ...actual,
    Navigate: () => <div>Navigate</div>,
  };
});

describe('test <Layout/> component', () => {
  it('should return <Wrapper/> component', () => {
    render(<Layout isAuth />);
    expect(screen.getByText(/wrapper/i)).toBeInTheDocument();
  });

  it('should return <Navigate/> component', () => {
    render(<Layout isAuth={false} />);
    expect(screen.getByText(/navigate/i)).toBeInTheDocument();
  });
});
