import Tags from "../Tags";
import Cards from "./Cards";
import styles from "./Galeria.module.scss";
import fotos from "./fotos.json";

function Galeria() {
  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags />
      <Cards itens={fotos} styles={styles} />
    </section>
  );
}

export default Galeria;
