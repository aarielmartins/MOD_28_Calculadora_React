import { useState, useEffect } from "react"
import styles from "./Cabecalho.module.css";

const Cabecalho = () => {
    
    return (
        <header className={styles.centro}>
            <img className={styles.imagem} src="../../../src/images/saude.png"/>
            <h1>VAMOS CALCULAR SEU IMC?</h1>
        </header>

    )
}

export default Cabecalho