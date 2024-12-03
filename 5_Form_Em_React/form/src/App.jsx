// Components
import MyForm from "./components/MyForm";

// Style - Css
import "./App.css";

function App() {
  return (
    <>
      <h2>Forms</h2>
      <MyForm
        user={{
          name: "Josias",
          email: "josias@gmail.com",
          bio: "Sou otário",
          role: "admin",
        }}
      />
    </>
  );
}

export default App;
