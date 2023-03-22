import "./Form.css";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";
import DropdownList from "../DropdownList/DropdownList";
import { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [funcao, setFuncao] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  const onSave = (e) => {
    e.preventDefault();
    props.aoColaboradorCadastrado({
      name,
      funcao,
      image,
      team,
    });
    setName('')
    setFuncao('')
    setImage('')
    setTeam('')
  };

  return (
    <section className="section-form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do player</h2>
        <TextField
          required={true}
          label="Nome"
          placeholder="Digite seu nome..."
          value={name}
          onAltered={(value) => setName(value)}
        />

        <TextField
          required={true}
          label="Função"
          placeholder="Digite sua função..."
          value={funcao}
          onAltered={(value) => setFuncao(value)}
        />

        <TextField
          label="Imagem"
          placeholder="Digite seu endereço de imagem..."
          value={image}
          onAltered={(value) => setImage(value)}
        />

        <DropdownList
          items={props.times}
          label="Times"
          placeholder="Selecione o seu time..."
          required={true}
          value={team}
          onAltered={(value) => setTeam(value)}
        />

        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;
