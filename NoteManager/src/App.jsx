import React from "react";
import {Outlet} from "react-router-dom"
import Header from "./components/Header";
import { NoteApi } from "./api/note-api";
import {useDispatch} from "react-redux"
import { setNoteList } from "./store/note/note-slice";
import { useEffect } from "react";
import style from "./index.module.css"

const App = () => {

  const dispatch = useDispatch()
  async function fetchAllNotes(){
   try {
      const noteList = await NoteApi.fetchAll();
      dispatch(setNoteList(noteList))
   }catch (error){
    console.log(error)
   }
  }

  useEffect(() => {
    fetchAllNotes()
   
  }, []);
  return (
    <>
      <div className="container-fluid">
        <Header />
        <Outlet style={style.container} />
      </div>
    </>
  )
}

export default App
