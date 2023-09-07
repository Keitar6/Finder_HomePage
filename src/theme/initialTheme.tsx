import { Theme } from './theme.types';

const initialTheme: Theme = {
  palette: {
    blueDark: '#0271e1',
    blueLight: '#EDF4FE',
    orangeLight: '#FF7C33',
    orangeDark: '#F56513',
    light: '#FCFEFF',
    greenLight: '##00ba9c',
    greenDark: '#30BA57',
    redLight: '#FF4438',
    redDark: '#CF0000',
    footer: '#3F4476',
    white: '#fff',

    inputGrey: '#a9b1b7',
    iconInputGrey: '#717d85',

    text: '#242A2F',
    textGrey: '#a8b0b7',
    yellow: '#FFD541',
  },
  typography: {
    banner: {
      fontFamily: 'Roboto, Arial, sans-serif',
      fontWeight: 700,
      fontSize: '53px',
      letterSpacing: '',
      lineHeight: '55px',
    },
    header1: {
      fontFamily: 'Roboto, Arial, sans-serif',
      fontWeight: 700,
      fontSize: '46px',
      letterSpacing: '2px',
      lineHeight: '57.5px',
    },
    header2: {
      fontFamily: 'Roboto, Arial, sans-serif',
      fontWeight: 700,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    header3: {
      fontFamily: 'Roboto, Arial, sans-serif',
      fontWeight: 700,
      fontSize: '1.25rem',
      lineHeight: 1.4,
      letterSpacing: '1px',
    },
    header4: {
      fontFamily: 'Roboto, Arial, sans-serif',
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: '1px',
    },
    header5: {
      fontFamily: 'Roboto, Arial, sans-serif',
      fontWeight: 600,
      fontSize: '0.875rem',
      lineHeight: 1.4,
      letterSpacing: '0',
    },
    paragraph: {
      fontFamily: 'Roboto, Arial, sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.6,
      letterSpacing: '',
    },
    boldParagraph: {
      fontFamily: 'Roboto, Arial, sans-serif',
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: '1rem',
      letterSpacing: '',
    },
    smallParagraph: {
      fontFamily: 'Roboto, Arial, sans-serif',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '',
      letterSpacing: '',
    },
  },
};

export default initialTheme;
