import React from "react";
import { getInitialData } from "../../utils/data";
import InputNotesContainer from "../input/InputNotesContainer";
import ActiveNotesList from "../list/ActiveNotesList";
import ArchivedNotesList from "../list/ArchivedNotesList";

class MainContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      activeNotes: getInitialData().filter((note) => note.archived === false),
      archivedNotes: getInitialData().filter((note) => note.archived === true),
    };

    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);

    this.onActiveNoteHandler = this.onActiveNoteHandler.bind(this);

    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onDeleteNoteHandler(id) {
    const deleteNotes = this.state.notes.filter((note) => note.id !== id);

    this.setState({
      notes: deleteNotes,
      activeNotes: deleteNotes.filter((note) => note.archived === false),
      archivedNotes: deleteNotes.filter((note) => note.archived === true),
    });
  }

  onActiveNoteHandler(id) {
    const moveToActive = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: false } : note
    );

    this.setState({
      notes: moveToActive,
      activeNotes: moveToActive.filter((note) => note.archived === false),
      archivedNotes: moveToActive.filter((note) => note.archived === true),
    });
  }

  onArchiveNoteHandler(id) {
    const moveToArchive = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: true } : note
    );

    this.setState({
      notes: moveToArchive,
      activeNotes: moveToArchive.filter((note) => note.archived === false),
      archivedNotes: moveToArchive.filter((note) => note.archived === true),
    });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title: title,
            body: body,
            archived: false,
            createdAt: new Date(),
          },
        ],
        activeNotes: [
          ...prevState.activeNotes,
          {
            id: +new Date(),
            title: title,
            body: body,
            archived: false,
            createdAt: new Date(),
          },
        ],
      };
    });
  }

  render() {
    const SearchedActiveNotes = this.state.activeNotes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.props.searchContent.toLowerCase());
    });

    const SearchedArchivedNotes = this.state.archivedNotes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.props.searchContent.toLowerCase());
    });

    const activeNotesContent =
      this.props.searchContent.length > 0
        ? SearchedActiveNotes
        : this.state.activeNotes;

    const archivedNotesContent =
      this.props.searchContent.length > 0
        ? SearchedArchivedNotes
        : this.state.archivedNotes;

    return (
      <main>
        <InputNotesContainer addNote={this.onAddNoteHandler} />
        <ActiveNotesList
          activeNotes={activeNotesContent}
          onDelete={this.onDeleteNoteHandler}
          onArchive={this.onArchiveNoteHandler}
        />
        <ArchivedNotesList
          archivedNotes={archivedNotesContent}
          onDelete={this.onDeleteNoteHandler}
          onActive={this.onActiveNoteHandler}
        />
      </main>
    );
  }
}

export default MainContainer;
