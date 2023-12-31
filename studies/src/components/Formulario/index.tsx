import React, { useState } from "react";
import Botao from "../Botao";
import style from "./Formulario.module.scss";
import { ITarefa } from "../../types/tarefa";
import { v4 as uuidv4 } from "uuid";

interface Props {
  setTaregas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}

function Formulario({ setTaregas }: Props) {
  const [tarefa, setTarefa] = useState("");  
  const [tempo, setTempo] = useState("00:00");

  function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setTaregas((tarefasAntigas) => [
      ...tarefasAntigas,
      { tarefa, tempo, selecionado: false, completado: false, id: uuidv4() },
    ]);
    setTarefa("")
    setTempo("00:00");
  }

  return (
    <form
      className={style.novaTarefa}
      onSubmit={adicionarTarefa} 
    >
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          placeholder="O que você quer estudar"
          required
          value={tarefa}
          onChange={(evento) =>
            setTarefa(evento.target.value)
          }
        ></input>
      </div>

      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
          value={tempo}
          onChange={(evento) =>
            setTempo(evento.target.value)
          }
        ></input>
      </div>
      <Botao type="submit" texto="Adicionar" />
    </form>
  );
}

export default Formulario;
