function Pessoa({nome, idade, profissao, foto}) {
    return (
        <div>
            <h1>Ficha Cadastral</h1>
            <img src={foto} alt={nome} />
            <h2>{nome} | {idade} anos</h2>
            <p>Profissão: {profissao}</p>
        </div>
    )
}

export default Pessoa