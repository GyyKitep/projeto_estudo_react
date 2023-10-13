import style from "./Footer.module.scss";
import { ReactComponent as Logo } from "assets/logo_cardapio.svg";

function Footer() {
  return (
    <footer className={style.footer}>
      <Logo />
    </footer>
  );
}

export default Footer;
