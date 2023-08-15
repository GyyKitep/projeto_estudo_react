import styles from "./BotaoPrincipal.module.css";

function BotaoPrincipal({children, tamanho}){
 return(
    <button className={`${styles.botaoLer} ${styles[tamanho]}` }>{children}</button>
 )
}

export default BotaoPrincipal;