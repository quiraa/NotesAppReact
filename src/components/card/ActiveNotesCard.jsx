import React from "react";
import NoteText from "../notes/NoteText";
import DeleteButton from "../button/DeleteButton";
import ArchiveButton from "../button/ArchiveButton";

function ActiveNotesCard({ id, title, createdAt, body, onDelete, onArchive }) {
  return (
    <div className="active-notes-item">
      <NoteText title={title} createdAt={createdAt} body={body} />
      <div className="note-btn-group">
        <DeleteButton id={id} onDelete={onDelete} />
        <ArchiveButton id={id} onArchive={onArchive} />
      </div>
    </div>
  );
}

export default ActiveNotesCard;
