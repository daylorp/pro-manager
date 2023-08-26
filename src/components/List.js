import Item from './Item'

function List(){
    return (
        <>
            <h1>Habilidades</h1>
            <ul>
               <Item habilidade="HTML" nivel={80}/>
               <Item habilidade="CSS" nivel={85}/>
               <Item habilidade="Javascript" nivel={60}/>
            </ul>
        </>
    )
}

export default List