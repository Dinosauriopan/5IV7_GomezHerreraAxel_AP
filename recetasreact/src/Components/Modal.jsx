import React from "react";

const Modal = props =>{
    return(
        <div className="modalBackground">
            <div className="modalContainer">
            <div className="title"><h4>{props.titleR}</h4></div>
            <div className="body">{props.ingredientes}</div>
            <div className="title"><h4>{props.bodyR}</h4></div>
            <div className="body">{props.pasos}</div>
            </div>
        </div>
    )
}

export default Modal