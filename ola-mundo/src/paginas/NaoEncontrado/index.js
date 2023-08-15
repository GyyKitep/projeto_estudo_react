import BotaoPrincipal from "componentes/BotaoPrincipal";
import styles from "./NaoEncontrado.module.css";
import erro404 from "assets/erro_404.png";
import { useNavigate } from "react-router-dom";

function NaoEncontrado() {
  const navegar = useNavigate();

  return (
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}>404</span>
        <h1 className={styles.titulo}>Ops! Pagina não encontrada.</h1>

        <p className={styles.paragrafo}>
          Tem certeza de que era isso que você estava procurando?
        </p>

        <p className={styles.paragrafo}>
          Aguarde uns instantes e recarregue a página, ou volte para a página
          inicial
        </p>

        <div className={styles.botaoContainer} onClick={() => navegar(-1)}>
          <BotaoPrincipal children="Voltar" tamanho="lg" />
        </div>
        <img
          src={erro404}
          alt="Imagem de cachorro usando oculos e se vestindo como humano"
          className={styles.imagemCachorro}
        />
      </div>
      <div className={styles.espacoEmBranco}></div>
    </>
  );
}

export default NaoEncontrado;
