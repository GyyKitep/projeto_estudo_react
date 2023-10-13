import style from "./Item.module.scss";
import cardapio from "data/cardapio.json";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import TagsPrato from "components/TagsPrato/indes";

type Props = (typeof cardapio)[0];

function Itens(props: Props) {
  const { id, title, description, photo } = props;
  const navigate = useNavigate();
  return (
    <div className={style.item} onClick={() => navigate(`/prato/${id}`)}>
      <div className={style.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={style.item__descricao}>
        <div className={style.item__titulo}>
          <h2> {title} </h2>
          <p> {description} </p>
        </div>
        <TagsPrato {...props} />
      </div>
    </div>
  );
}

export default Itens;
