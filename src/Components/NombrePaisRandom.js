import PropTypes from "prop-types"

export default function NombrePaisRandom({nombre}) {
    return <p>{nombre}</p>
}

NombrePaisRandom.propTypes = {
    name: PropTypes.string,
}
