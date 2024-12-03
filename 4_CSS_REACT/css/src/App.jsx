// Components
import MyComponent from "./components/MyComponent";

// Syle - Css
import "./App.css";
import { useState } from "react";

function App() {
  const n = 15;
  const [name] = useState("Jean")
  return (
    <>
      {/* Css global */}
      <h1>React com CSS</h1>
      {/* Css de componente */}
      <MyComponent />
      <p>Este parágrafo é do App.jsx</p>
      {/* Inline Css */}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>
        Este elemento foi estilizado de forma inline
      </p>
      {/* Css Inline Dinâmico */}
      <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>
        CSS Dinâmico
      </h2>
      <h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>
        CSS Dinâmico
      </h2>
      <h2 style={name === "Jean" ? { color: "green", backgroundColor: "#000" } : null}>
        Teste Nome
      </h2>
      {/* Classe dinâmica */}
    </>
  );
}

export default App;