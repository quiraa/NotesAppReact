import React from "react";

function ActiveButton({ id, onActive }) {
  return (
    <button className="active-button" onClick={() => onActive(id)}>
      <i className="fa-solid fa-box-open"></i>
    </button>
  );
}

export default ActiveButton;
