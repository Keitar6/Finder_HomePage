import { InputVariant, RegexPat } from '../components/atoms/Input/Input.types';
import { Getters } from '../types/shared.types';

type LoginRegexProps = Getters<InputVariant, RegexPat>;

const loginRegexPattern: LoginRegexProps = {
  search: {
    pattern: /^[a-zA-Z0-9]+$/,
    required: true,
    maxLength: 36,
    minLength: 8,
  },
};

export default loginRegexPattern;
