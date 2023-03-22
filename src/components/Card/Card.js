import "./Card.css";

const Card = ({ nome, imagem, funcao, corDeFundo }) => {
  return (
    <div className="card">
      <div className="cabecalho" style={{backgroundColor: corDeFundo}}>
        <img src={imagem} alt={nome}></img>
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{funcao}</h5>
      </div>
    </div>
  );
};

export default Card;
