import React from "react";
import ArchivedNotesCard from "../card/ArchivedNotesCard";

function ArchivedNotesList({ archivedNotes, onDelete, onActive }) {
  return (
    <section id="archived-note-section">
      <div className="archived-notes-container">
        <h2>Archived Notes</h2>
        <div className="archived-notes-list">
          {archivedNotes.length > 0 ? (
            archivedNotes.map((archivedNote) => (
              <ArchivedNotesCard
                key={archivedNote.id}
                id={archivedNote.id}
                onDelete={onDelete}
                onActive={onActive}
                {...archivedNote}
              />
            ))
          ) : (
            <h3>Empty Notes</h3>
          )}
        </div>
      </div>
    </section>
  );
}

export default ArchivedNotesList;
