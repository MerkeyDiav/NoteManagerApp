import React from 'react';
import {useSelector} from "react-redux";
import style from "../styles/noteList.module.css";
import { TextCard } from '../components/TextCard';
import {useNavigate} from "react-router-dom";

export const NoteList = () => {
    const noteList = useSelector(store => store.NOTE.noteList)
    console.log(noteList)
    const navigate = useNavigate();

  return (
    <div className={` row-justify-content-center ${style.cards_container}`} >
       {noteList.map((note) => {
          return (
            <div key={note.id} className={style.card_container}>
                <TextCard  
                    title={note.title} 
                    subtitle={note.create_at} 
                    content={note.content} 
                    onClick={() => navigate("/note/" + note.id)} 
                    onClickTrash={()=>alert("Hello")}
                    
                    />
            </div>
          )
       })}
    </div>
  )
}
