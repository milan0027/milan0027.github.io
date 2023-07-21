import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ErrorPage from "./pages/ErrorPage";
import './App.css';

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<LandingPage/>} />
            <Route exact path="*" element={<ErrorPage/>}></Route>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
