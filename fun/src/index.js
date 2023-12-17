import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DarkModeProvider, useDarkMode } from './DarkModeContext';
import "./App.css";
const AppWrapper = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={`app ${isDarkMode ? 'dark-mode-body' : ''}`}>
      <App />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <AppWrapper />
    </DarkModeProvider>
  </React.StrictMode>
);
