import axios from "axios";
import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import MainCalculator from './routes/MainCalculator';

function App() {
  useEffect(() => {
    axios.get('/api/test')
      .then(res => console.log(res))
      .catch()
  });

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<MainCalculator />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
