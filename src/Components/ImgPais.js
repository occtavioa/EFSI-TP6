import PropTypes from "prop-types"

export default function ImgPais({nombrePais, urlFlag}) {
    return <img alt={nombrePais} src={urlFlag} />
}

ImgPais.propTypes = {
    nombrePais: PropTypes.string,
    urlFlag: PropTypes.string,
}
