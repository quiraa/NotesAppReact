import React from "react";

function ArchiveButton({ id, onArchive }) {
  return (
    <button className="archive-button" onClick={() => onArchive(id)}>
      <i className="fa-solid fa-box-archive"></i>
    </button>
  );
}

export default ArchiveButton;
