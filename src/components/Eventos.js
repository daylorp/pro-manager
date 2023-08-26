import styles from './Frase.module.css'

function Evento({numero}) {

    function meuEvento() {
        alert(`opa, fui ativado ${numero}`)
    }

    return (
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Clique para atualizar os dados:</p>
            <button className={styles.botaoEvento} onClick={meuEvento}>Atualizar!</button>
        </div>
    )
}

export default Evento