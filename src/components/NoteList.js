import React, { useContext } from "react";
import Note from "./Note";
import NotesContext from "../context/notes-context";

const NoteList = () => {
  const { notes, dispatch } = useContext(NotesContext);

  const removeNote = title => {
    dispatch({
      type: "REMOVE_NOTE",
      title
    });
  };

  return notes.map(note => <Note note={note} removeNote={removeNote}></Note>);
};

export { NoteList as default };
