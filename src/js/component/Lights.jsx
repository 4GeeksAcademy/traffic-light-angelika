import React from "react";

const Lights = ({ activeColor }) => {
    const colors = [
        { className: 'bg-danger', shadowClass: 'shadow-danger' },
        { className: 'bg-warning', shadowClass: 'shadow-warning' },
        { className: 'bg-success', shadowClass: 'shadow-success' }
    ];

    return (
        <>
            {colors.map((color, index) => (
                <div key={index} className={`light-color ${color.className} ${activeColor === index ? color.shadowClass : ''}`}></div>
            ))}
        </>
    );
};

export default Lights;