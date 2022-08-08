import axios from "axios";
import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import MainCalculator from './routes/MainCalculator';
import Test from './routes/Test';

function App() {
  useEffect(() => {
    axios.get('http://localhost:5000/test')
      .then(res => console.log(res))
      .catch((Error)=>{console.log(Error)})
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainCalculator />}/>
        <Route path="/test" element={<Test />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
