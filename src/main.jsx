import React from 'react';
import ReactDOM from 'react-dom/client';
import ExerciseScienceSite from './ExerciseScienceSite.jsx'; // path must match your file

import './index.css'; // if you have Tailwind or styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ExerciseScienceSite />
  </React.StrictMode>
);

