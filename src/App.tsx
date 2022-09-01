import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Modal from 'react-modal';
import Diary from "./routes/Diary";
import LoginPage from "./routes/LoginPage";
import MainCalculator from './routes/MainCalculator';
import MainPage from "./routes/MainPage";
import Test from './routes/Test';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/calculator" element={<MainCalculator />}/>
        <Route path="/diary" element={<Diary />}/>
        <Route path="/test" element={<Test />}/>
      </Routes>
    </BrowserRouter>
  );
}
Modal.setAppElement('#root');

export default App;
