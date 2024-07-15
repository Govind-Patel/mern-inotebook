import React from 'react'

function NoteItems(props) {
    const {note} = props;
  return (
    <div className='col-md-3'>
        <div className="card my-3">
            <div className="card-body">
              <div className='d-flex  align-items-center'>
                <h5 className="card-title">{note.title}</h5>
                <i className="fa fa-trash mx-2" aria-hidden="true"></i>
                <i className="fa fa-edit mx-2" aria-hidden="true"></i>
              </div>
                <p className="card-text">{note.description} </p>
                
            </div>
        </div>
    </div>
  )
}

export default NoteItems
