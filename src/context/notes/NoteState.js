import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) =>{
    const notesInitial = [
        {
          "_id": "6683b64bb20240f63a63c68a",
          "user": "667cfe0956bacea5acb2cacd",
          "title": "my title",
          "description": "Please wake early",
          "tag": "personal",
          "date": "2024-07-02T08:11:55.091Z",
          "__v": 0
        },
        {
          "_id": "6683b64bb20240f63a63c68c",
          "user": "667cfe0956bacea5acb2cacd",
          "title": "my title",
          "description": "Please wake early",
          "tag": "personal",
          "date": "2024-07-02T08:11:55.769Z",
          "__v": 0
        },
        {
          "_id": "6683b6434cb20240f63a63c68e",
          "user": "667cfe0956bacea5acb2cacd",
          "title": "my title",
          "description": "Please wake early",
          "tag": "personal",
          "date": "2024-07-02T08:11:56.467Z",
          "__v": 0
        },
        {
          "_id": "6683b64bqeb20240f63a63c68a",
          "user": "667cfe0956bacea5acb2cacd",
          "title": "my title",
          "description": "Please wake early",
          "tag": "personal",
          "date": "2024-07-02T08:11:55.091Z",
          "__v": 0
        },
        {
          "_id": "6683b64bbeew20240f63a63c68c",
          "user": "667cfe0956bacea5acb2cacd",
          "title": "my title",
          "description": "Please wake early",
          "tag": "personal",
          "date": "2024-07-02T08:11:55.769Z",
          "__v": 0
        },
        {
          "_id": "6683b64cb202e40f63a63c68e",
          "user": "667cfe0956bacea5acb2cacd",
          "title": "my title",
          "description": "Please wake early",
          "tag": "personal",
          "date": "2024-07-02T08:11:56.467Z",
          "__v": 0
        }
      ]

      // Add a note 
      const addNote = (title,description, tag)=>{
          // TODO: Api call 

        console.log("adding a new notes");
        const note =  {
          "_id": "6683b64cb202e40f63a63c68e3",
          "user": "667cfe0956bacea5acb2cacd43",
          "title": "my title Added note",
          "description": "Please wake early [Added]",
          "tag": "personal",
          "date": "2024-07-02T08:11:56.467Z",
          "__v": 0
        }
        setNotes(notes.concat(note));
      }
      // delete a note 
      const deleteNote = (id)=>{
          // TODO: Api call 
          console.log("Deleting the note id " + id);
          const newNotes = notes.filter((note => { return note._id!==id}))
          setNotes(newNotes);
      }
      // Edit a note 
      const editNote = ()=>{

      }

      const [notes, setNotes] = useState(notesInitial)
    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;