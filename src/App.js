import axios from "axios";
import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import LoginPage from "./routes/LoginPage";
import MainCalculator from './routes/MainCalculator';
import MainPage from "./routes/MainPage";
import Test from './routes/Test';

function App() {
  // useEffect(() => {
  //   axios.get('/api/test')
  //     .then(res => console.log(res))
  //     .catch((Error)=>{console.log(Error)})
  // });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/calculator" element={<MainCalculator />}/>
        <Route path="/test" element={<Test />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
