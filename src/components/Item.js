import PropTypes from 'prop-types'

function Item({habilidade, nivel}) {
    return (
        <>
            <li>{habilidade} - {nivel}</li>
        </>
    )
}

Item.propTypes = {
    habilidade: PropTypes.string.isRequired,
    nivel: PropTypes.number.isRequired,
}

Item.defaultProps = {
    habilidade: "Desconhecido",
    nivel: 0,
}

export default Item