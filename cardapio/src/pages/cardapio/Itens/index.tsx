import { useState, useEffect } from "react";
import Item from "./Item";
import cardapio from "./itens.json";
import style from "./Itens.module.scss";

interface Props {
  busca: string;
  filtro: number | null;
  ordenador: string;
}

function Itens({ busca, filtro, ordenador }: Props) {
  const [lista, setLista] = useState(cardapio);

  useEffect(() => {
    const novaLista = cardapio.filter(
      (item) => testaBusca(item.title) && testaFiltro(item.category.id)
    );
    setLista(ordenar(novaLista));
  }, [busca, filtro, ordenador]);

  function testaBusca(title: string) {
    const regex = new RegExp(busca, "i"); // "i" case insensitive
    return regex.test(title);
  }

  function testaFiltro(id: number) {
    if (filtro !== null) return filtro === id;
    return true;
  }

  function ordenar(novaLista: typeof cardapio) {
    switch (ordenador) {
      case "porcao":
        return novaLista.sort((a, b) => (a.size > b.size ? 1 : -1));
      case "qtd_pessoas":
        return novaLista.sort((a, b) => (a.serving > b.serving ? 1 : -1));
      case "preco":
        return novaLista.sort((a, b) => (a.price > b.price ? 1 : -1));
      default:
        return novaLista;
    }
  }

  return (
    <div className={style.itens}>
      {lista.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Itens;
