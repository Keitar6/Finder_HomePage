import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ThemeProvider from '../../../theme/ThemeContext';
import loginRegexPattern from '../../../utils/loginRegexPatterns';
import Input from './Input';

const SnapshotInput = () => (
  <ThemeProvider>
    <Input
      input='search'
      type='text'
      placeholder='Search'
      regexPattern={loginRegexPattern.search}
    />
  </ThemeProvider>
);
describe('Input', () => {
  afterEach(cleanup);
  it('renders correctly', () => {
    const snapshot = renderer.create(<SnapshotInput />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
