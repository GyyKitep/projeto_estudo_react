import React from "react";
import style from "./Botao.module.scss";


interface Props{
  texto: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void
}

function Botao({texto, type, onClick}: Props) {
  return (
    <button type={type} className={style.botao} onClick={onClick}>
      {texto}
    </button>
  );
}

export default Botao;
