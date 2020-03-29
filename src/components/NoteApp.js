import React, { useEffect, useReducer } from "react";
import noteReducer from "../reducers/note";
import NoteList from "./NoteList";
import NoteForm from "./NoteForm";
import NotesContext from "../context/notes-context";

const NoteApp = () => {
  const [notes, dispatch] = useReducer(noteReducer, []);

  useEffect(() => {
    const notesData = JSON.parse(localStorage.getItem("notes"));
    if (notesData) {
      dispatch({ type: "POPULATE_NOTE", notes: notesData });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    // 這裏的notes dispatch 就是讓裡面的 component 可以access的值
    // 子組件只要像下面這樣就能得到了
    // const { notes, dispatch } = useContext(NotesContext);

    <NotesContext.Provider value={{ notes, dispatch }}>
      <div style={{ backgroundColor: "white" }}>
        <NoteForm></NoteForm>
        <NoteList></NoteList>
      </div>
    </NotesContext.Provider>
  );
};

export { NoteApp as default };
