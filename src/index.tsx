import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Router from './routes/Router';
import { ThemeProvider, createTheme } from '@mui/material';
import Navbar from './components/Navbar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

root.render(
  <React.StrictMode>
        <ThemeProvider theme={theme} >
    <Navbar />
      <div style={{ marginTop: 10 }}></div>
    <Router />
    </ThemeProvider>
  </React.StrictMode>
);
