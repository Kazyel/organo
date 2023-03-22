import "./Team.css";
import Card from "../Card/Card";

const Team = (props) => {
  return (
    props.colaboradores.length > 0 && (
      <section
        className="team"
        style={{
          backgroundColor: props.corSecundaria,
        }}
      >
        <h3
          style={{
            borderBottom: `4px solid ${props.corPrimaria}`,
          }}
        >
          {props.nome}
        </h3>
        <div className="colaboradores">
          {props.colaboradores.map((colaborador) => (
            <Card
              corDeFundo={props.corPrimaria}
              key={colaborador.name}
              nome={colaborador.name}
              funcao={colaborador.funcao}
              imagem={colaborador.image}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Team;
