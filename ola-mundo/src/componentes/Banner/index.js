import styles from "./Banner.module.css";
import ciculoColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/minha_foto.png";

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá, Mundo!</h1>
        <p className={styles.paragrafo}>
          Et autem unde ut ipsa accusamus et dolorem obcaecati sed voluptatibus
          unde non animi nesciunt et eligendi iste. Et natus necessitatibus et
          tempore cupiditate aut repellat vitae aut consequatur voluptas non
          libero sequi. 
        </p>
      </div>

      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={ciculoColorido}
          aria-hidden={true}
          alt="Circulo Colorido"
        />

        <img
          className={styles.minhaFoto}
          src={minhaFoto}
          alt="Foto do usúario"
        />
      </div>
    </div>
  );
}

export default Banner;
