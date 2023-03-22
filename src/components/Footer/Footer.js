import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="imagens">
        <a href="https://www.facebook.com/AluraCursosOnline/">
          <img src="/assets/imagens/fb.png" alt="Logo do Facebook"></img>
        </a>
        <a href="https://twitter.com/AluraOnline">
          <img src="/assets/imagens/tw.png" alt="Logo do Twitter"></img>
        </a>
        <a href="https://www.instagram.com/aluraonline/">
          <img src="/assets/imagens/ig.png" alt="Logo do Instagram"></img>
        </a>
      </div>
      <img
        className="logo"
        src="/assets/imagens/logo.png"
        alt="Logo do Organo"
      ></img>
      <p>
        Desenvolvido por <b>Alura</b>.
      </p>
    </footer>
  );
};

export default Footer;
