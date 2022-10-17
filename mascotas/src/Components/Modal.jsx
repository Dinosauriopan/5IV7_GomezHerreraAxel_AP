import React from "react";

const Modal = props =>{
    return(
        <div className="modalBackground">
            <div className="modalContainer">
            <div className="title"><h4>{props.nombreM}</h4></div>
            <div className="p-3">{props.datosM}</div>
            <div className="title"><h4>{props.telefono}</h4></div>
            <div className="p-3">{props.telefonoD}</div>
            </div>
        </div>
    )
}

export default Modal