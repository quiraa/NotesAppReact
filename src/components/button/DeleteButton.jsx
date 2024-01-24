import React from "react";

function DeleteButton({ id, onDelete }) {
  return (
    <button className="delete-button" onClick={() => onDelete(id)}>
      <i className="fa-solid fa-trash"></i>
    </button>
  );
}

export default DeleteButton;
