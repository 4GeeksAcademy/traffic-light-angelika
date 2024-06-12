import React, { useState } from "react";

const Lights = ({ activeColor, setActiveColor }) => {
    const colors = [
        { className: 'bg-danger', shadowClass: 'shadow-danger' },
        { className: 'bg-warning', shadowClass: 'shadow-warning' },
        { className: 'bg-success', shadowClass: 'shadow-success' }
    ];

    const handleClick = (index) => {
        setActiveColor(index);
    };

    return (
        <>
            {colors.map((color, index) => (
                <div
                    key={index}
                    className={`light-color ${color.className} ${activeColor === index ? color.shadowClass : ''}`}
                    onClick={() => handleClick(index)}
                ></div>
            ))}
        </>
    );
};

export default Lights;