import React from "react";
// import { Link } from "react-router-dom";
import "./style.css"

export default function Navbar() {

    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Lists</h1>
                <div class="dropdown" style={{float: "right"}}>
                    Sort by:
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{marginLeft: "10px"}}>
                        Sort
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" value="aToZ"  onChange="sortFilter()">List Name: A to Z</a>
                        <a class="dropdown-item" value="zToA"  onChange="sortFilter()">List Name: Z to A</a>
                    </div>
                </div>
            </div>
        </div>
    )
}