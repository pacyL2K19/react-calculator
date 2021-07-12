import renderer from 'react-test-renderer';
import Quote from '../Quote';

describe('Quote page', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<Quote />);
    expect(tree).toMatchSnapshot();
  });
});
