import App from './App';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import ThemeProvider from './theme/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <ThemeProvider>
          <App />
    </ThemeProvider>
  </StrictMode>,
);
