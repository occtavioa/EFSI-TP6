import PropTypes from "prop-types"

export default function ResultadoRta({res}) {
    return <p>
        {res ?
            <span style={{ color: 'green' }}>Bien</span> :
            <span style={{ color: 'red' }}>Mal</span>}
    </p>
}

ResultadoRta.propTypes = {
    res: PropTypes.bool,
}
