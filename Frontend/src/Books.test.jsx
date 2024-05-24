import React from 'react';
import { render } from '@testing-library/react';
import Books from './Components/Books';


describe('Books Component', () => {
  it('renders without crashing', () => {
    render(<Books />);
  });
});