import React from "react";
import PropTypes from "prop-types";

const BtnCambiarColor = ({ setActiveColor }) => {
    const txBtn = "Cambiar Color";
    const cambiarColor = () => {
        setActiveColor(activeColor => (activeColor === 2 ? 0 : activeColor + 1));
    };

    return (
        <button type="button" className="btn btn-secondary mt-3" onClick={cambiarColor}>
            {txBtn}
        </button>
    );
};

BtnCambiarColor.propTypes = {
    setActiveColor: PropTypes.func.isRequired
};

export default BtnCambiarColor;