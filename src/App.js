import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import MainCalculator from './routes/MainCalculator';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<MainCalculator />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
