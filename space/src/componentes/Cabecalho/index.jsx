import logo from "./logo.png";
import search from "./search.png";
import styles from "./Cabecalho.module.scss"

function Cabecalho(){
    return(
        <header className={styles.cabecalho}>
            <img src={logo} alt="Logo do Space"/>
            <div className={styles.cabecalho__container}>
                <input className={styles.cabecalho__input} type="text" placeholder="O que você procura?"></input>
                <img src={search} alt="Icone de Lupa"></img>
            </div>
        </header>
    );
}

export default Cabecalho;