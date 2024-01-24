import React from "react";
import NoteText from "../notes/NoteText";
import DeleteButton from "../button/DeleteButton";
import ActiveButton from "../button/ActiveButton";

function ArchivedNotesCard({ id, title, createdAt, body, onDelete, onActive }) {
  return (
    <div className="archived-notes-item">
      <NoteText title={title} createdAt={createdAt} body={body} />
      <div className="note-btn-group">
        <DeleteButton id={id} onDelete={onDelete} />
        <ActiveButton id={id} onActive={onActive} />
      </div>
    </div>
  );
}

export default ArchivedNotesCard;
