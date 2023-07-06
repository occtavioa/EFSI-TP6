import PropTypes, { number } from "prop-types"

export default function Puntos({puntos}) {
    return <p>Puntos: {puntos}</p>
}

Puntos.propTypes = {
    puntos: PropTypes.number,
}
