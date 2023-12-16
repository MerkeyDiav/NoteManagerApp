import React from 'react'
import style from "../styles/NoteCreate.module.css";
import {useDispatch} from "react-redux"
import { NoteForm } from './NoteForm';
import { NoteApi } from '../api/note-api';
import { addNote } from '../store/note/note-slice';
import {useNavigate} from "react-router-dom";


function NoteCreate() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  function safeStringify(obj) {
    const cache = new Set();
    return JSON.stringify(obj, (key, value) => {
      if (typeof value === 'object' && value !== null) {
        if (cache.has(value)) {
          // Duplicate reference found, discard key
          return;
        }
        // Store value in our set
        cache.add(value);
      }
      return value;
    });
  }
  async function createNote(formValues){
    const createdNote = await NoteApi.create({
      ...JSON.parse(safeStringify(formValues)),
      create_at: new Date().toLocaleDateString()
    })
    dispatch(addNote(createdNote))
    navigate("/")
  }
    

  return (
   <NoteForm title="Create a note" onSubmit={createNote} />
  )
}

export default NoteCreate
