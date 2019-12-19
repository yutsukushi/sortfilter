import React from "react";
import "./style.css"

export default function Card({name, createdate, products, items, total, Button}) {

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{createdate}</h6>
                <div className="card-text">{products}</div>
                <hr></hr>
                <h6 className="card-subtitle mb-2 text-muted">{items} total items | Total: $ {total}</h6>
                <hr></hr>
                <Button />
            </div>
        </div>
  )
}