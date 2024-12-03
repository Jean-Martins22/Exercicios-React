// Components
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";

// Style / Css
import "./App.css";
import Pokemon from "./assets/pokemon.gif";
import { useState } from "react";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";
import UserDetails from "./components/UserDetails";

function App() {
  //const name = "Jean";
  const [userName] = useState("João");
  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "KIA", color: "Preto", newCar: false, km: 6503 },
    { id: 3, brand: "Ferrari", color: "Amarela", newCar: false, km: 1504 },
  ];

  const users = [
    { id: 1, name: "Jean", job: "Programador", age: 22 },
    { id: 2, name: "Julio", job: "Reporter", age: 30 },
    { id: 3, name: "Pedro", job: "Vagabundo", age: 23 },
    { id: 4, name: "Julia", job: "Estudante", age: 15 },
  ];

  function showMessage() {
    console.log("Evento do componente pai!");
  }
  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <>
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.png" alt="Pinguim" />
      </div>
      {/* Imagem em public */}
      <div>
        <img src={Pokemon} alt="Pokémon Squirtle" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={userName} />
      {/* destructuring */}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
      {/* reaproveitando */}
      <CarDetails brand="Ford" km={0} color="Vermelho" newCar={true} />
      <CarDetails brand="Fiat" km={4500} color="Branco" newCar={false} />
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
      {/* fragment */}
      <Fragment propFragment="teste" />
      {/* children */}
      <Container myValue={"testing"}>
        <p>E este é o conteúdo</p>
      </Container>
      {/* executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {/* desafio */}
      {users.map((user) => (
        <UserDetails
          key={user.id}
          name={user.name}
          job={user.job}
          age={user.age}
        />
      ))}
    </>
  );
}

export default App;
