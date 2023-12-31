import style from "./Menu.module.scss";
import { ReactComponent as Logo } from "assets/logo_cardapio.svg";
import {Link} from "react-router-dom"

function Menu() {
  const rotas = [
    {
      label: "Início",
      to: "/",
    },
    {
      label: "Cardápio",
      to: "/cardapio",
    },
    {
      label: "Sobre",
      to: "/sobre",
    },
  ];

  return (
    <nav className={style.menu}>
      <Logo />
      <ul className={style.menu__list}>
        {rotas.map((rota, index) => (
          <li key={index} className={style.menu__link}>
            <Link to={rota.to}>{rota.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
