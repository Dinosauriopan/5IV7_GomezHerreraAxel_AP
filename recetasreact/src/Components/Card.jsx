import React from "react";
import './card-style.css'
import { useState } from "react";
import Modal from "./Modal";

const Card = props=>{
    const [openModal, setOpenModal] = useState(false);

    return(
        <div className="card text-center">
            <div className="overflow">
                <img src={props.imgsrc} alt="imagen recetas" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <button className="btn btn-outline-success" onClick={() => {setOpenModal(true);}}>
                    Ver receta
                </button>
                {openModal && <Modal titleR={props.titleR} bodyR={props.bodyR} ingredientes={props.ingredientes} pasos={props.pasos}/>}
            </div>
        </div>
    );
}

export default Card;