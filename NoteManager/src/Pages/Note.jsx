import style from "../styles/note.module.css";
import { useParams } from "react-router-dom";
import {useSelector} from "react-redux";
import { NoteForm } from "./NoteForm";

export default function Note() {
    const {noteId} = useParams();
    const note = useSelector(store => store.NOTE.noteList.find(note => note.id == noteId))
    console.log(note)
    return <>
    {note && (
        <NoteForm 
            isEditable={false} 
            note={note}
            title={note.title} 
            onClickEdit={()=>{}}
            onClickTrash={()=>{}}
            />)}
    </>
}