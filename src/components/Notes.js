import React ,{useContext} from 'react'
import noteContext from '../context/notes/NoteContext';
import NoteItems from './NoteItems';
import AddNote from './AddNote';

function Notes() {
    const context = useContext(noteContext)
    const {notes, addNote} = context;
  return (
    <>
      <AddNote />
      <div className="row my-3">
          <h3>You Notes</h3>
          {notes.map((note) =>{
              return <NoteItems key={note._id} note = {note} />
          })}
      </div>
    </>
  )
}

export default Notes
