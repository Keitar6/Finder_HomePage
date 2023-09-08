import App from './App';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import ThemeProvider from './theme/ThemeContext';
import GeneralProvider from './contexts/GeneralContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <ThemeProvider>
      <GeneralProvider>
        <App />
      </GeneralProvider>
    </ThemeProvider>
  </StrictMode>,
);
