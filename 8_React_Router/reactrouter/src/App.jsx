// Style - Css
import "./App.css";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";

// Components
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";

// 1 - Config React Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <h1>React Router</h1>
      <BrowserRouter>
        {/* 2 - Links Com React Router */}
        <Navbar />
        {/* 9 - Search */}
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* 4 - Rota Dinâmica */}
          <Route path="/products/:id" element={<Product />} />
          {/* 6 - Nested Route */}
          <Route path="/products/:id/info" element={<Info />} />
          {/* 9 - Search */}
          <Route path="/search" element={<Search />} />
          {/* 10 - Redirect */}
          <Route path="/company" element={<Navigate to="/about" />} />
          {/* 7 - No Match Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
