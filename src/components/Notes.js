import React ,{useContext} from 'react'
import noteContext from '../context/notes/NoteContext';
import NoteItems from './NoteItems';

function Notes() {
    const context = useContext(noteContext)
    const {notes,setNotes} = context;
  return (
    <div className="row my-3">
        <h3>You Notes</h3>
        {notes.map((note) =>{
            return <NoteItems note = {note} />
        })}
    </div>
  )
}

export default Notes
