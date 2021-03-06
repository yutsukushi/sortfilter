import React from "react";
// import { Link } from "react-router-dom";
import "./style.css"

export default function Navbar({ onChange }) {

    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4 title">Lists</h1>
                <div className="dropdown" style={{float: "right", clear: "right"}}>
                    <div className="sortText">Sort by:
                        <form onChange={onChange}>
                            <select
                            
                            className="searchBar">
                            <option value="default">Sort List</option>
                            <option value="ascend">Sort List(A - Z)</option>
                            <option value="descend">Sort List(Z - A)</option>
                            </select>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}