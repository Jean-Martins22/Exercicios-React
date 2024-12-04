// Style - Css
import "./App.css";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Info from "./pages/Info";

// Components
import Navbar from "./components/Navbar";

// 1 - Config React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <h1>React Router</h1>
      <BrowserRouter>
        {/* 2 - Links Com React Router */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* 4 - Rota Dinâmica */}
          <Route path="/products/:id" element={<Product />} />
          {/* 6 - Nested Route */}
          <Route path="/products/:id/info" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
