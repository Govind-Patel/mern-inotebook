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
          "_id": "6683b64cb20240f63a63c68e",
          "user": "667cfe0956bacea5acb2cacd",
          "title": "my title",
          "description": "Please wake early",
          "tag": "personal",
          "date": "2024-07-02T08:11:56.467Z",
          "__v": 0
        },
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
          "_id": "6683b64cb20240f63a63c68e",
          "user": "667cfe0956bacea5acb2cacd",
          "title": "my title",
          "description": "Please wake early",
          "tag": "personal",
          "date": "2024-07-02T08:11:56.467Z",
          "__v": 0
        }
      ]
      const [notes, setNotes] = useState(notesInitial)
    return (
        <NoteContext.Provider value={{notes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;