import React, {
  Fragment,
  useState,
  useEffect,
  useReducer,
  useContext
} from "react";
import NotesContext from "../context/notes-context";

const NoteForm = () => {
  const [title, setTitle] = useState("");
  const { dispatch } = useContext(NotesContext);

  const addNote = () => {
    dispatch({ type: "ADD_NOTE", title });
    setTitle("");
  };

  return (
    <Fragment>
      <h3>Note App</h3>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button onClick={addNote}>add note</button>
    </Fragment>
  );
};
export { NoteForm as default };
