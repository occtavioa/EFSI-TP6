import PropTypes from "prop-types"

export default function Formulario({rtaCorrecta, rtaIncorrecta, nombrePaisRandom}) {
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            console.log(e.target.elements["pais"].value);
            console.log(nombrePaisRandom);
            if (e.target.elements["pais"].value === nombrePaisRandom) {
                rtaCorrecta()
            } else {
                rtaIncorrecta()
            }
        }}>
            <input type={"text"} name={"pais"}></input>
            <input type={"submit"} value={"comprobar"}></input>
        </form>
    )
}

Formulario.propTypes = {
    rtaCorrecta: PropTypes.func,
    rtaIncorrecta: PropTypes.func,
    nombrePaisRandom: PropTypes.string,
}
