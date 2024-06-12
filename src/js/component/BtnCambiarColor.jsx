import React, { useState } from "react";

const BtnCambiarColor = ({ setActiveColor }) => {
    const txBtn = "Cambiar Color";
    const cambiarColor = () => {
        setActiveColor(activeColor => {
            if (activeColor === 2) return 0;
            return activeColor + 1;
        });
    };

    return (
        <button type="button" className="btn btn-secondary mt-3" onClick={cambiarColor}>
            {txBtn}
        </button>
    );
};

export default BtnCambiarColor;