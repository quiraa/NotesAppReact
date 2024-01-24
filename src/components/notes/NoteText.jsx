import React from "react";
import { showFormattedDate } from "../../utils/data";

function NoteText({ title, createdAt, body }) {
  return (
    <div className="note-text">
      <h3>{title}</h3>
      <p>{body}</p>
      <h5>{showFormattedDate(createdAt)}</h5>
    </div>
  );
}

export default NoteText;
