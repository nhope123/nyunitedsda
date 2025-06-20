import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import LoginForm from './LoginForm';

describe('LoginForm', () => {  
  it('renders LoginForm', () => {
    const { getByText } = render(<LoginForm />);

    expect(getByText('LoginForm Component')).toBeInTheDocument();
  });
});
