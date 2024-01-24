import React from "react";
import ActiveNotesCard from "../card/ActiveNotesCard";

function ActiveNotesList({ activeNotes, onDelete, onArchive }) {
  return (
    <section id="active-note-section">
      <div className="active-notes-container">
        <h2>Active Notes</h2>
        <div className="active-notes-list">
          {activeNotes.length > 0 ? (
            activeNotes.map((activeNote) => (
              <ActiveNotesCard
                key={activeNote.id}
                onDelete={onDelete}
                onArchive={onArchive}
                {...activeNote}
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

export default ActiveNotesList;
