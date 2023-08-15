import { Link } from "react-router-dom";
import styles from "./Post.module.css";
import BotaoPrincipal from "componentes/BotaoPrincipal";

function PostCard(post) {
  return (
    <Link to={`/posts/${post.post.id}`}>
      <div className={styles.post}>
        <img
          className={styles.capa}
          src={`/assets/posts/${post.post.id}/capa.png`}
          alt="Imagem de capa do post"
        />

        <h2 className={styles.titulo}>{post.post.titulo}</h2>
        <BotaoPrincipal children="Ler"/>
      </div>
    </Link>
  );
}

export default PostCard;
