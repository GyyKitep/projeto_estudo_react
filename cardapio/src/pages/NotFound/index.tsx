import { useNavigate } from "react-router-dom";
import style from "./NotFound.module.scss";
import styleTema from "styles/Tema.module.scss";
import classNames from "classnames";
import { ReactComponent as NotFoundImage } from "assets/not_found.svg";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div
      className={classNames({
        [style.container]: true,
        [styleTema.container]: true,
      })}
    >
      <div className={style.voltar}>
        <button onClick={() => navigate(-1)}>{"< Voltar"}</button>
      </div>
      <NotFoundImage />
    </div>
  );
}

export default NotFound;
