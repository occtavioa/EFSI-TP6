import PropTypes from "prop-types"

export default function Timer({timer}) {
    return <p>{timer}</p>
}

Timer.propTypes = {
    timer: PropTypes.number,
}
