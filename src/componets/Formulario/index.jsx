import { useState, useEffect } from "react"
import styles from "./Formulario.module.css";

const Formulario = () => {
    
    const [altura, setAltura] = useState(0)
    const [peso, setPeso] = useState(0)


    const calculoIMC = () => {
        const IMC = (peso / (altura * altura)).toFixed(2)
        return IMC
    }

    return (
        <form className={styles.formulario}>
            <label>Sua altura (m):</label>
            <input className={styles.campo} type="number" placeholder="Ex: 1,70cm" step="0.01" onChange={evento => setAltura(parseFloat(evento.target.value))}/>
            <br />
            <label>Seu peso (kg):</label>
            <input className={styles.campo} type="number" placeholder="Ex: 60kg" onChange={evento => setPeso(parseFloat(evento.target.value))}/>
            <br />
            <h2>
                {calculoIMC() == Infinity || calculoIMC() == -Infinity
                ? ""
                :calculoIMC() < 0
                ? ""
                :isNaN(calculoIMC())
                ? ""
                :`Seu IMC é ${calculoIMC()}`}
            </h2>
            <br />
            <h4>
                {calculoIMC() == Infinity || calculoIMC() == -Infinity
                ? ""
                :calculoIMC() < 0
                ? ""
                :isNaN(calculoIMC())
                ? ""
                : calculoIMC() < 18.5
                ? (
                    <>
                    ABAIXO DO NORMAL <br /><br />
                    Seu IMC indica que você está abaixo do peso. Isso pode estar associado a deficiências nutricionais ou outros fatores de saúde. Considere uma alimentação equilibrada e, se necessário, consulte um profissional da saúde.
                    </>
                )
                : calculoIMC() < 25
                ? (
                    <>
                    NORMAL <br /><br />
                    Parabéns! Seu IMC está dentro da faixa considerada saudável. Mantenha uma alimentação equilibrada e a prática regular de atividades físicas para continuar com esse ótimo resultado.
                    </>
                )
                : calculoIMC() < 30
                ? (
                    <>
                    SOBREPESO <br /><br />
                    Seu IMC indica que você está um pouco acima do peso ideal. Pequenos ajustes na rotina, como uma alimentação balanceada e exercícios regulares, podem ajudar a melhorar sua saúde e bem-estar.
                    </>
                )
                : calculoIMC() < 35
                ? (
                    <>
                    OBESIDADE GRAU I <br /><br />
                    Seu IMC indica obesidade grau I. Isso pode aumentar o risco de problemas de saúde, como diabetes e hipertensão. Mudanças no estilo de vida, como uma dieta equilibrada e atividades físicas, podem ser muito benéficas.
                    </>
                )
                : calculoIMC() < 40
                ? (
                    <>
                    OBESIDADE GRAU II <br /><br />
                    Seu IMC está na faixa de obesidade grau II, o que pode trazer impactos significativos à saúde. É importante buscar orientação médica para avaliar possíveis tratamentos e mudanças na alimentação e no estilo de vida.
                    </>
                )
                : (
                    <>
                    OBESIDADE GRAU III <br /><br />
                    Seu IMC indica obesidade mórbida, um nível que pode trazer sérios riscos à saúde. O acompanhamento médico é essencial para encontrar o melhor caminho para melhorar sua qualidade de vida.
                    </>
                )}
            </h4>
        </form>
    )
}

export default Formulario