import "./Form.css";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";
import DropdownList from "../DropdownList/DropdownList";
import { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [cargo, setCargo] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  const onSave = (e) => {
    e.preventDefault();
    props.aoColaboradorCadastrado({
      name,
      cargo,
      image,
      team,
    });
    setName('')
    setCargo('')
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
          placeholder="nome"
          value={name}
          onAltered={(value) => setName(value)}
        />

        <TextField
          required={true}
          label="Cargo"
          placeholder="cargo"
          value={cargo}
          onAltered={(value) => setCargo(value)}
        />

        <TextField
          label="Imagem"
          placeholder="endereço de imagem"
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
