function Pessoa({nome, idade, profissao, foto}) {
    return (
        <div>
            <h1>Currículo</h1>
            <img src={foto} alt={nome} />
            <h3>{nome} | {idade} anos</h3>
            <p>Profissão: {profissao}</p>
        </div>
    )
}

export default Pessoa