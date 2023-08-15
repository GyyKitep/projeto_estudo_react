import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

import styles from "./SobreMin.module.css";
import PostModelo from "componentes/PostModelo";

function SobreMin() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, eu sou o Geovanny!</h3>
      <img
        src={fotoSobreMim}
        alt="Foto do Geovanny"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet. Est asperiores architecto ut quis nostrum ea
        molestiae temporibus. Et laborum doloremque aut porro repudiandae ut
        quidem reprehenderit. Non illo praesentium et vitae tempore aut debitis
        aspernatur et voluptas obcaecati sed dolore ratione qui inventore
        aspernatur. Ut perferendis officiis aut necessitatibus vitae et rerum
        omnis?{" "}
      </p>
      <p className={styles.paragrafo}>
        Qui veritatis veritatis ut nisi perferendis non similique sapiente 33
        iusto quaerat sit aspernatur dolorum. Et molestias ipsa aut quos eaque
        est dolor mollitia et molestias magnam in doloremque maxime ut fuga
        neque.{" "}
      </p>
      <p className={styles.paragrafo}>
        Vel impedit veniam aut nemo magni eos odio adipisci ut quaerat
        inventore? Eum vero suscipit et accusamus dolore et error culpa.{" "}
      </p>
    </PostModelo>
  );
}

export default SobreMin;
