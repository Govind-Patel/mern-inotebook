import React, {useContext} from 'react'
import noteContext from '../context/notes/NoteContext';

function NoteItems(props) {
    const {note, updateNote} = props;
    const context = useContext(noteContext)
    const {deleteNote} = context;

  return (
    <div className='col-md-3'>
        <div className="card my-3">
            <div className="card-body">
              <div className='d-flex  align-items-center'>
                <h5 className="card-title">{note.title}</h5>
                <i className="fa fa-trash mx-2" aria-hidden="true" onClick={()=>{deleteNote(note._id)}}></i>
                <i className="fa fa-edit mx-2" aria-hidden="true" onClick={()=>{updateNote(note)}}></i>
              </div>
                <p className="card-text">{note.description} </p>
                
            </div>
        </div>
    </div>
  )
}

export default NoteItems
