function Form() {

    function cadastrarUsuario(e){
        e.preventDefault()
        alert(`Usuário cadastrado com sucesso`);
    }

    return(
        <div>
            <h1>Meu Cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input id="nomeusu" type="text" placeholder="Digite o seu nome" />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form