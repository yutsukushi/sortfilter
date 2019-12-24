import React from "react";
import Pushpin from "../Card/icons8-push-pin-26.png"
import "./style.css"

export default function Card({name, createdate, products, items, total, Button}) {

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{name}
                <img className="pushpin-icon" src={Pushpin} alt="pushpin"/>
                </h5>
                <h6 className="card-subtitle text-muted createddate">Created: {createdate}</h6>
                <div className="card-text">{products}</div>
                <div className="card-bottom">
                    <hr></hr>
                    <h6 className="card-subtitle text-muted total">{items} total items | Total: $ {total}</h6>
                    <hr></hr>
                    <Button />
                </div>
            </div>
        </div>
  )
}