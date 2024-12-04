// Style - Css
import "./App.css";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";

// 1 - Config React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <h1>React Router</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
