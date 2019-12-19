import React from "react";
import "./style.css";

// This file exports both the List and ListItem component

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return (
      <li className="list-group-item" style={{border: "none"}}>{children}</li>
  );
}
