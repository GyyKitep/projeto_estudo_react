import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {

          //get  //set
  const [nome, setNome] = useState(""); //rook
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("Programação");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      nome: nome,
      cargo: cargo,
      imagem: imagem,
      time: time,
    });

    setNome('');
    setCargo('');
    setImagem('');
    setTime('Programação');
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para cirar o card do colaborador</h2>
        <CampoTexto
          valor={nome}
          obricatorio={true}
          label="Nome"
          placeholder="Digite o seu Nome"
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          valor={cargo}
          obricatorio={true}
          label="Cargo"
          placeholder="Digite seu Cargo"
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          valor={imagem}
          label="Imagem"
          placeholder="Digite o endereço da Imagem"
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          valor={time}
          obricatorio={true}
          label="Times"
          itens={props.nomesDosTimes}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao> Criar Card </Botao>
      </form>
    </section>
  );
};

export default Formulario;
