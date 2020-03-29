import React from "react";
const Note = ({ note, removeNote }) => {
  return (
    <div>
      {note.title}
      <button onClick={() => removeNote(note.title)}>remove note</button>
    </div>
  );
};

export { Note as default };
