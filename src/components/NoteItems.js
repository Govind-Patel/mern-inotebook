import React from 'react'

function NoteItems(props) {
    const {note} = props;
  return (
    <div className='col-md-3'>
        <div className="card my-3">
            <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                <p className="card-text">{note.description} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut sunt cumque ipsa ratione dicta, error repellendus dolorum quisquam excepturi? Illo maiores veritatis explicabo ut adipisci deserunt sequi quo soluta dolore repellat! Possimus, ad laudantium!</p>
            </div>
        </div>
    </div>
  )
}

export default NoteItems
