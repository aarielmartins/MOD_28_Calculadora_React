import { useState, useEffect } from "react"
import styles from "./Cabecalho.module.css";
import saude from "../../images/saude.png";

const Cabecalho = () => {
    return (
        <header className={styles.centro}>
            <img className={styles.imagem} src={saude} alt="Ícone de saúde"/>
            <h1>VAMOS CALCULAR SEU IMC?</h1>
        </header>
    )
}

export default Cabecalho
