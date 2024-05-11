

import React from 'react';
import { createRoot } from 'react-dom/client'; // Import from 'react-dom/client' instead of 'react-dom'

import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';

createRoot(document.getElementById('root')).render(<App />);

reportWebVitals();
