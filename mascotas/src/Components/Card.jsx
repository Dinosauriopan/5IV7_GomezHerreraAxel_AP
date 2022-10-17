import React from "react";
import './card-style.css'
import { useState } from "react";
import Modal from "./Modal";

const Card = props=>{
    const [openModal, setOpenModal] = useState(false);

    return(
        <div className="card text-center">
            <div className="overflow">
                <img src={props.imgsrc} alt="imagen mascotas" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <div className="text-start">
                <p className="p-3">{props.body}</p>
                </div>
                <button className="btn btn-outline-success" onClick={() => {setOpenModal(true);}}>
                    Info para adoptarlo
                </button>
                {openModal && <Modal nombreM={props.nombreM} datosM={props.datosM} telefono={props.telefono} telefonoD={props.telefonoD}/>}
            </div>
        </div>
    );
}

export default Card;