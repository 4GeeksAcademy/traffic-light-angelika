import React, { useState } from "react";
import Lights from "./Lights";
import BtnCambiarColor from "./BtnCambiarColor";

const ContainerSemaforo = () => {
    const [activeColor, setActiveColor] = useState(0);

    return (
        <>
        <div className="card bg-dark containerSemaforo d-flex flex-column align-items-center justify-content-evenly">
            <Lights activeColor={activeColor} />
        </div>
        <BtnCambiarColor setActiveColor={setActiveColor} />
        </>
    );
};

export default ContainerSemaforo;