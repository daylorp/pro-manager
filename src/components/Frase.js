import styles from './Frase.module.css'

function Frase() {
    return (
    <div className={styles.fraseContainer}>
        <p className={styles.fraseContent}>Clique para atualizar as informações</p>
    </div>
    )
}

export default Frase