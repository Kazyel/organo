import Banner from "./components/Banner/Banner";
import Form from "./components/Form/Form";
import Team from "./components/Team/Team";
import { useState } from "react";

const App = () => {
  const teams = [
    {
      nome: "Valorant",
      corPrimaria: "#57c278",
      corSecundaria: "#d9f7e9",
    },
    {
      nome: "League of Legends",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Counter Strike: Global Offensive",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "Rocket League",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
  ];

  //Setar novo player
  const [colaboradores, setColaborador] = useState([]);

  //Criar novo Player
  const novoColaborador = (colaborador) => {
    setColaborador([...colaboradores, colaborador]);
  };

  return (
    <div>
      <Banner />

      <Form
        times={teams.map((teams) => teams.nome)}
        aoColaboradorCadastrado={(colaborador) => novoColaborador(colaborador)}
      />

      {teams.map((team) => (
        <Team
          key={team.nome}
          nome={team.nome}
          corPrimaria={team.corPrimaria}
          corSecundaria={team.corSecundaria}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.team === team.nome
          )}
        />
      ))}
    </div>
  );
};

export default App;
