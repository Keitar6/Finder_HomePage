import { HTMLInputTypeAttribute } from 'react';

export type RegexPat = {
  pattern?: RegExp;
  required: boolean;
  maxLength?: number;
  minLength?: number;
};

const inputVariants = ['search'] as const;

export type InputVariant = (typeof inputVariants)[number];

export type RegisterOptions = { validate: (value: string) => boolean } | null;

export type InputProps = {
  input: InputVariant;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  regexPattern: RegexPat;
};
