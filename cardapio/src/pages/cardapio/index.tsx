import style from "./Cardapio.module.scss";
import {ReactComponent as Logo} from "../../assets/logo_cardapio.svg"

function Cardapio() {
  return (
    <main>
      <nav className={style.menu}>
        <Logo />
      </nav>
    </main>
  );
}
export default Cardapio;
