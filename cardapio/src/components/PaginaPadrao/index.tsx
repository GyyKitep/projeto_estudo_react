import style from "./PaginaPadrao.module.scss";
import { Outlet } from "react-router-dom";

function PaginaPadrao() {
  return (
    <>
      <header className={style.header}>
        <div className={style.header__text}>A casa do código e da massa</div>
      </header>
      <div>
        <Outlet /> //children do react-router-dom
      </div>
    </>
  );
}

export default PaginaPadrao;
