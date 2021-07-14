import React from 'react'
import { render } from '@testing-library/react';
import Quote from '../Quote';

describe('Quote page', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Quote />);
    expect(asFragment(<Quote />)).toMatchSnapshot();
  });
});
