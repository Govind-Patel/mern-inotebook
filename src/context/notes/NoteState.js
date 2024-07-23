import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) =>{
    const host = "http://localhost:5000"
    const notesInitial = [ ]
    
    // get all notes
    const getNotes = async()=>{
      // TODO: Api call 
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers:{
          'Content-Type' : 'application/json',
          'auth-token' :'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3Y2ZlMDk1NmJhY2VhNWFjYjJjYWNkIn0sImlhdCI6MTcyMDA5NzAyNX0.SzVsH9IpzDSddtSKTXP2dE3G0Z1wcI7_MseaBPUtFMU'
        }
        
      });
      const json =await response.json();
      // console.log(json);
      setNotes(json);
  
  }
      // Add a note 
      const addNote = async(title,description, tag)=>{
          // TODO: Api call 
          const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers:{
              'Content-Type' : 'application/json',
              'auth-token' :'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3Y2ZlMDk1NmJhY2VhNWFjYjJjYWNkIn0sImlhdCI6MTcyMDA5NzAyNX0.SzVsH9IpzDSddtSKTXP2dE3G0Z1wcI7_MseaBPUtFMU'
            },
            body: JSON.stringify({ title, description,tag }),
          });
          const note =await response.json();
       
          setNotes(notes.concat(note));
      }
      // delete a note 
      const deleteNote =  async(id)=>{
          // TODO: Api call 

          const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers:{
              'Content-Type' : 'application/json',
              'auth-token' :'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3Y2ZlMDk1NmJhY2VhNWFjYjJjYWNkIn0sImlhdCI6MTcyMDA5NzAyNX0.SzVsH9IpzDSddtSKTXP2dE3G0Z1wcI7_MseaBPUtFMU'
            },
           
          });
          const json = response.json();
          console.log(json);
          const newNotes = notes.filter((note => { return note._id!==id}))
          setNotes(newNotes);
      }
      // Edit a note 
      const editNote = async(id , title, description, tag)=>{
        // api call 
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
          method: "PUT",
          headers:{
            'Content-Type' : 'application/json',
            'auth-token' :'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3Y2ZlMDk1NmJhY2VhNWFjYjJjYWNkIn0sImlhdCI6MTcyMDA5NzAyNX0.SzVsH9IpzDSddtSKTXP2dE3G0Z1wcI7_MseaBPUtFMU'
          },
          body: JSON.stringify({ title, description, tag }),
        });
        const json = await response.json();
        console.log(json)
        // edit for client 
        for (let index = 0; index < notes.length; index++) {
          const element = notes[index];
          if(element._id === id){
            element.title = title;
            element.description = description;
            element.tag = tag
          }
          
        }
      }

      const [notes, setNotes] = useState(notesInitial)
    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote ,getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;