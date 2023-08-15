import styles from "./Menu.module.css";
import MenuLink from "../MenuLink";

function Menu() {
  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink children={"Inicio"} to={"/"}/>
        <MenuLink children={"Sobre Min"} to={"/sobremin"}/>
      </nav>
    </header>
  );
}

export default Menu;
