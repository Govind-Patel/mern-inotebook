import React ,{useContext, useEffect, useRef,useState} from 'react'
import noteContext from '../context/notes/NoteContext';
import NoteItems from './NoteItems';
import AddNote from './AddNote';

function Notes() {
    const context = useContext(noteContext)
    const {notes,getNotes} = context;
    useEffect(() => {
      getNotes();
      // eslint-disable-next-line
    },)
    
    const [note, setNote] = useState({etitle:" ",edescription:" ",etag:""})
    const ref = useRef(null)
    const updateNote = (currentNote)=>{
        ref.current.click();
        setNote({etitle:currentNote.title, edescription: currentNote.description, etag:currentNote.tag});
    }

    const handleClick = (e)=>{
      console.log("update note ", note)
      e.preventDefault();
    }
    const onChange = (e)=>{
      setNote({...note,[e.target.name]:e.target.value })
    }
  return (
    <>
      <AddNote />

        <button type="button" className="btn btn-primary d-none" ref ={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
          Launch demo modal
        </button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form className='my-3'>
                  <div className="mb-3">
                      <label htmlFor="title" className="form-label">Title</label>
                      <input type="text" className="form-control" id="etitle" name='etitle' value={note.etitle} aria-describedby="emailHelp" onChange={onChange} />
                  </div>
                  <div className="mb-3">
                      <label htmlFor="description" className="form-label">Description</label>
                      <input type="text" className="form-control" name='edescription' value={note.edescription} id="edescription" onChange={onChange} />
                  </div>
                  <div className="mb-3">
                      <label htmlFor="tag" className="form-label">Tag</label>
                      <input type="text" className="form-control" name='etag' value={note.etag} id="etag" onChange={onChange} />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" onClick={handleClick} className="btn btn-primary">Update Note</button>
              </div>
            </div>
          </div>
        </div>
      <div className="row my-3">
          <h3>You Notes</h3>
          {notes.map((note) =>{
              return <NoteItems key={note._id} updateNote = {updateNote} note = {note} />
          })}
      </div>
    </>
  )
}

export default Notes
